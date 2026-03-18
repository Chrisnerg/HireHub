"use client"

import { useEffect, useState } from "react"
import { getAdminStats, getAdminUsers, type AdminStats, type AdminUser } from "../actions/admin"
import { getAdminApplications, type Application } from "../actions/applications"
import { getJobs, type Job } from "../actions/jobs"
import { getCompanies, type Company } from "../actions/companies"
import { getToken } from "../actions/auth"
import Loading from "../loading"
import { APPLICATION_STATUS_MAP } from "@/lib/status-config"
import { capitalize, formatTimeAgo } from "@/lib/utils"
import StatCard from "./StatCard"
import DataTable from "./DataTable"

const AdminOverview = () => {
    const [stats, setStats] = useState<AdminStats>({ activeJobs: 0, totalApplicants: 0, inInterview: 0, offersExtended: 0 })
    const [applications, setApplications] = useState<Application[]>([])
    const [users, setUsers] = useState<AdminUser[]>([])
    const [jobMap, setJobMap] = useState<Record<string, Job>>({})
    const [companyMap, setCompanyMap] = useState<Record<string, Company>>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const token = getToken()
        if (!token) { setLoading(false); return }
        const fetchAll = async () => {
            const [statsResult, appsData, usersData, jobsData, companiesData] = await Promise.all([
                getAdminStats(token),
                getAdminApplications(token),
                getAdminUsers(token),
                getJobs(),
                getCompanies(),
            ])
            setStats(statsResult.data)
            setApplications(appsData)
            setUsers(usersData)
            setJobMap(Object.fromEntries(jobsData.map((j) => [j.id, j])))
            setCompanyMap(Object.fromEntries(companiesData.map((c) => [c.id, c])))
            setError(statsResult.error ?? "")
            setLoading(false)
        }
        fetchAll()
    }, [])

    if (loading) {
        return <Loading />
    }

    const recentApps = applications.slice(0, 5)

    return (
        <>
            {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
                <StatCard value={stats.activeJobs} label="Active Jobs" valueClassName="text-blue-600" />
                <StatCard value={stats.totalApplicants} label="Total Applicants" valueClassName="text-purple-600" />
                <StatCard value={stats.inInterview} label="In Interview" valueClassName="text-orange-500" />
                <StatCard value={stats.offersExtended} label="Offers Extended" valueClassName="text-green-600" />
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
                {recentApps.length === 0 ? (
                    <p className="text-gray-400 text-sm">No applications yet.</p>
                ) : (
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-neutral-500 text-left">
                                <th className="py-2">Applicant</th>
                                <th className="py-2">Job</th>
                                <th className="py-2">Status</th>
                                <th className="py-2 text-center">Applied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentApps.map((app) => {
                                const job = jobMap[app.jobId]
                                const colorClass = APPLICATION_STATUS_MAP[app.status]?.chipClass ?? "bg-gray-100 text-gray-700"
                                return (
                                    <tr key={app.id}>
                                        <td className="py-2">{app.userId.slice(0, 8)}…</td>
                                        <td>{job?.title ?? app.jobId.slice(0, 8)}</td>
                                        <td>
                                            <span className={`px-2 py-1 rounded text-xs ${colorClass}`}>
                                                {APPLICATION_STATUS_MAP[app.status]?.label ?? app.status}
                                            </span>
                                        </td>
                                        <td className="text-center">{formatTimeAgo(app.appliedAt)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Registered Users</h2>
                <DataTable
                    columns={["User", "Email", "Role", "Joined"]}
                    data={users}
                    emptyMessage="No users yet."
                    renderRow={(user) => (
                        <tr key={user.id}>
                            <td className="py-2">{user.name}</td>
                            <td>{user.email}</td>
                            <td>{capitalize(user.role)}</td>
                            <td>{formatTimeAgo(user.createdAt)}</td>
                        </tr>
                    )}
                />
            </div>
        </>
    )
}

export default AdminOverview
