"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import NavigationBar from "@/app/components/NavigationBar"
import JobDetailCard from "@/app/components/JobDetailCard"
import JobDetails from "@/app/components/JobDetails"
import CompanyCard from "@/app/components/CompanyCard"
import SimilarJobs from "@/app/components/SimilarJobs"
import { IoMdArrowBack } from "react-icons/io"
import { getJobById, getJobs, type Job } from "@/app/actions/jobs"
import { getCompanyById, getCompanies, type Company } from "@/app/actions/companies"
import Loading from "@/app/loading"

const JobDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params)
    const [job, setJob] = useState<Job | null>(null)
    const [company, setCompany] = useState<Company | null>(null)
    const [similarJobs, setSimilarJobs] = useState<{ initials: string; color: string; title: string; company: string; salary: string }[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const jobData = await getJobById(id)
            if (!jobData) { setLoading(false); return }

            const [companyData, allJobs, allCompanies] = await Promise.all([
                getCompanyById(jobData.companyId),
                getJobs(),
                getCompanies(),
            ])

            const companyMap = Object.fromEntries(allCompanies.map((c) => [c.id, c]))
            const similar = allJobs
                .filter((j) => j.id !== id && j.experienceLevel === jobData.experienceLevel)
                .slice(0, 3)
                .map((j) => {
                    const co = companyMap[j.companyId]
                    const salaryText =
                        j.salaryMin && j.salaryMax
                            ? `$${Math.round(j.salaryMin / 1000)}k – $${Math.round(j.salaryMax / 1000)}k`
                            : "Undisclosed"
                    return {
                        initials: (co?.name ?? "??").slice(0, 2).toUpperCase(),
                        color: "bg-gray-800",
                        title: j.title,
                        company: co?.name ?? "Unknown",
                        salary: salaryText,
                    }
                })

            setJob(jobData)
            setCompany(companyData)
            setSimilarJobs(similar)
            setLoading(false)
        }
        fetchData()
    }, [id])

    if (loading) return <Loading />

    if (!job) {
        return (
            <div>
                <NavigationBar />
                <div className="flex justify-center items-center min-h-[60vh]">
                    <p className="text-gray-500">Job not found.</p>
                </div>
            </div>
        )
    }

    const salaryText =
        job.salaryMin && job.salaryMax
            ? `$${Math.round(job.salaryMin / 1000)}k – $${Math.round(job.salaryMax / 1000)}k`
            : "Undisclosed"

    const deadlineText = job.deadline
        ? new Date(job.deadline).toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })
        : "Open"

    const postedText = new Date(job.postedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })

    return (
        <div>
            <NavigationBar />

            <div className="mx-auto my-4 max-w-6xl px-4 sm:px-6 lg:px-8">
                <Link href="/jobs" className="btn btn-ghost rounded-md px-2 text-sm hover:bg-gray-800 hover:text-white sm:text-base">
                    <IoMdArrowBack className="text-lg" />
                    Back to Jobs
                </Link>
            </div>

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-8 sm:px-6 lg:flex-row lg:items-start lg:gap-8 lg:px-8">
                <div className="w-full lg:max-w-3xl lg:flex-1">
                    <JobDetailCard
                        jobId={job.id}
                        title={job.title}
                        company={company?.name ?? "Unknown"}
                        industry={company?.industry ?? ""}
                        type={job.type}
                        level={job.experienceLevel}
                        location={job.location}
                        salary={salaryText}
                        applicants={`${job.applicantsCount ?? 0}`}
                        posted={postedText}
                    />
                    <JobDetails
                        description={job.description}
                        requirements={job.requirements}
                        skills={job.skills}
                    />
                </div>

                <div className="flex w-full flex-col gap-6 lg:max-w-sm">
                    <CompanyCard
                        name={company?.name ?? "Unknown"}
                        industry={company?.industry ?? ""}
                        initials={(company?.name ?? "??").slice(0, 2).toUpperCase()}
                        description={company?.description ?? "No description available."}
                        size={company?.size ?? "N/A"}
                        location={company?.location ?? "N/A"}
                        deadline={deadlineText}
                    />
                    <SimilarJobs jobs={similarJobs} />
                </div>
            </div>
        </div>
    )
}

export default JobDetailsPage
