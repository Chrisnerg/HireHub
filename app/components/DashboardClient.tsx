"use client"

import { useEffect, useMemo, useState } from "react"
import DashboardHeader from "./DashboardHeader"
import DashboardOverview from "./DashboardOverview"
import DashboardApplications from "./DashboardApplications"
import DashboardSavedJobs from "./DashboardSavedJobs"
import { getDashboardStats, type DashboardStats } from "../actions/dashboard"
import { getUserApplications, type Application } from "../actions/applications"
import { getSavedJobs, type SavedJob } from "../actions/savedJobs"
import type { Job } from "../actions/jobs"
import type { Company } from "../actions/companies"
import { getToken } from "../actions/auth"
import Loading from "../loading"

type DashboardClientProps = {
  initialJobs: Job[]
  initialCompanies: Company[]
}

const DashboardClient = ({ initialJobs, initialCompanies }: DashboardClientProps) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [stats, setStats] = useState<DashboardStats>({ totalApplied: 0, inInterview: 0, offers: 0, savedCount: 0 })
  const [applications, setApplications] = useState<Application[]>([])
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([])
  const [userName, setUserName] = useState("User")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setLoading(false)
      setError("Please sign in to view your dashboard.")
      return
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]))
      if (payload.email) setUserName(payload.email.split("@")[0])
    } catch {}

    const fetchAll = async () => {
      const [statsResult, appsData, savedData] = await Promise.all([
        getDashboardStats(token),
        getUserApplications(token),
        getSavedJobs(token),
      ])

      setStats(statsResult.data)
      setApplications(appsData)
      setSavedJobs(savedData)
      setError(statsResult.error ?? "")
      setLoading(false)
    }

    fetchAll()
  }, [])

  const jobMap = useMemo(() => Object.fromEntries(initialJobs.map((j) => [j.id, j])), [initialJobs])
  const companyMap = useMemo(() => Object.fromEntries(initialCompanies.map((c) => [c.id, c])), [initialCompanies])

  if (loading) return <Loading />

  return (
    <div>
      <DashboardHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        name={userName}
        applicationCount={stats.totalApplied}
        savedCount={stats.savedCount}
      />

      {error ? <p className="mx-auto mt-4 max-w-5xl text-sm text-red-600">{error}</p> : null}

      {activeTab === "overview" && (
        <DashboardOverview
          stats={stats}
          applications={applications}
          jobMap={jobMap}
          companyMap={companyMap}
        />
      )}
      {activeTab === "applications" && (
        <DashboardApplications
          applications={applications}
          jobMap={jobMap}
          companyMap={companyMap}
        />
      )}
      {activeTab === "saved" && (
        <DashboardSavedJobs
          savedJobs={savedJobs}
          jobMap={jobMap}
          companyMap={companyMap}
        />
      )}
    </div>
  )
}

export default DashboardClient
