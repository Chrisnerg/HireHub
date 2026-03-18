import { getCompanies } from "../actions/companies"
import { getJobs } from "../actions/jobs"
import DashboardClient from "../components/DashboardClient"

const DashboardPage = async () => {
    const [initialJobs, initialCompanies] = await Promise.all([getJobs(), getCompanies()])

    return <DashboardClient initialJobs={initialJobs} initialCompanies={initialCompanies} />
}

export default DashboardPage
