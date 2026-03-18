"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AdminSidebar from "../components/AdminSidebar"
import AdminOverview from "../components/AdminOverview"
import AdminManageJobs from "../components/AdminManageJobs"
import AdminApplicants from "../components/AdminApplicants"
import AdminPostNewJob from "../components/AdminPostNewJob"
import { decodeToken, getToken } from "../actions/auth"
import Loading from "../loading"

const AdminPage = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("Overview")
    const [checkingAuth, setCheckingAuth] = useState(true)

    useEffect(() => {
        const token = getToken()

        if (!token) {
            router.replace("/login")
            return
        }

        const user = decodeToken(token)

        if (!user || user.role !== "admin") {
            router.replace("/")
            return
        }

        setCheckingAuth(false)
    }, [router])

    if (checkingAuth) {
        return <Loading />
    }

    const renderTab = () => {
        switch (activeTab) {
            case "Overview": return <AdminOverview />
            case "Manage Jobs": return <AdminManageJobs />
            case "Applicants": return <AdminApplicants />
            case "Post New Job": return <AdminPostNewJob />
            default: return null
        }
    }

    return (
        <div className="flex min-h-screen">
            <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className="flex-1 bg-neutral-50 p-8 overflow-y-auto">
                {renderTab()}
            </main>
        </div>
    )
}

export default AdminPage
