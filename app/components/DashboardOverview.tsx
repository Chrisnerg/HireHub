import { FaGift, FaCheckCircle, FaChartLine, FaBookmark } from "react-icons/fa"
import type { DashboardStats } from "../actions/dashboard"
import type { Application } from "../actions/applications"
import type { Job } from "../actions/jobs"
import type { Company } from "../actions/companies"
import { APPLICATION_STATUS_MAP } from "@/lib/status-config"
import { formatTimeAgo } from "@/lib/utils"
import StatCard from "./StatCard"

type Props = {
    stats: DashboardStats
    applications: Application[]
    jobMap: Record<string, Job>
    companyMap: Record<string, Company>
}

const DashboardOverview = ({ stats, applications, jobMap, companyMap }: Props) => {
    const recent = applications.slice(0, 3)

    return (
        <div className="w-full flex flex-col items-center mt-6">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <StatCard value={stats.totalApplied} label="Total Applied" valueClassName="text-blue-700" icon={<FaGift className="text-blue-500" />} />
                <StatCard value={stats.inInterview} label="In Interview" valueClassName="text-purple-700" icon={<FaCheckCircle className="text-purple-500" />} />
                <StatCard value={stats.offers} label="Offers" valueClassName="text-green-700" icon={<FaChartLine className="text-green-500" />} />
                <StatCard value={stats.savedCount} label="Saved Jobs" valueClassName="text-orange-700" icon={<FaBookmark className="text-orange-500" />} />
            </div>

            <div className="w-full max-w-5xl bg-base-100 rounded-xl shadow p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg">Recent Applications</span>
                </div>
                {recent.length === 0 ? (
                    <p className="text-gray-400 text-sm py-4 text-center">No applications yet.</p>
                ) : (
                    <div className="divide-y">
                        {recent.map((app) => {
                            const job = jobMap[app.jobId]
                            const company = job ? companyMap[job.companyId] : null
                            const initials = (company?.name ?? "??").slice(0, 2).toUpperCase()
                            const colorClass = APPLICATION_STATUS_MAP[app.status]?.textClass ?? "text-gray-600"

                            return (
                                <div key={app.id} className="flex items-center py-4">
                                    <div className="avatar mr-4">
                                        <div className="w-10 rounded-full bg-gray-900 flex items-center justify-center">
                                            <span className="text-white font-bold">{initials}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-medium">{job?.title ?? "Unknown Job"}</span>
                                        <span className="text-xs text-gray-500">
                                            {company?.name ?? "Unknown"} · Applied {formatTimeAgo(app.appliedAt)}
                                        </span>
                                    </div>
                                    <span className={`badge badge-md badge-outline font-medium ${colorClass}`}>
                                        {APPLICATION_STATUS_MAP[app.status]?.label ?? app.status}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardOverview
