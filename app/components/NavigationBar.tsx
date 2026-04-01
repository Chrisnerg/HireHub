"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, removeToken } from "../actions/auth"

const NavigationBar = () => {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [dashboardHref, setDashboardHref] = useState("/dashboard")

    useEffect(() => {
        const user = getCurrentUser()
        if (!user?.email) return

        setUserEmail(user.email)
        setUserName(user.email.split("@")[0])
        setDashboardHref(user.role === "admin" ? "/admin" : "/dashboard")
        setIsLoggedIn(true)
    }, [])

    const handleSignOut = () => {
        removeToken()
        setUserName("")
        setUserEmail("")
        setIsLoggedIn(false)
        router.push("/")
    }

    return (
        <header className="border-b border-slate-300/70 bg-[#f7f6f2]">
            <div className="navbar mx-auto max-w-6xl px-3 py-2 sm:px-5">
                <div className="navbar-start">
                    <Link href="/" className="rounded-xl px-2 py-1 text-lg font-heading font-bold tracking-tight text-slate-900 transition hover:opacity-80 sm:text-xl">
                        Hire<span className="text-emerald-800">Hub</span>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <Link
                        href="/jobs"
                        className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900"
                    >
                        Browse Jobs
                    </Link>
                </div>

                <div className="navbar-end flex items-center gap-1.5 sm:gap-2">
                    <Link
                        href="/jobs"
                        className="rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900 md:hidden"
                    >
                        Jobs
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Link
                                href={dashboardHref}
                                className="hidden whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900 sm:inline-flex sm:text-sm"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="inline-flex whitespace-nowrap rounded-lg bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-900 sm:px-4 sm:text-sm"
                            >
                                Sign Out
                            </button>
                            <div className="hidden items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 lg:flex">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold uppercase text-white">
                                    {userName.slice(0, 1)}
                                </div>
                                <div className="leading-tight">
                                    <p className="max-w-36 truncate text-sm font-semibold text-slate-900">
                                        {userName}
                                    </p>
                                    <p className="max-w-48 truncate text-xs text-slate-600">
                                        {userEmail}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900 sm:px-4 sm:text-sm"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="inline-flex whitespace-nowrap rounded-lg bg-emerald-800 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-900 sm:px-4 sm:text-sm"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                </div>
            </div>
            {isLoggedIn && (
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 pb-3 sm:hidden">
                    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold uppercase text-white">
                            {userName.slice(0, 1)}
                        </div>
                        <div className="min-w-0 leading-tight">
                            <p className="max-w-28 truncate text-xs font-semibold text-slate-900">
                                {userName}
                            </p>
                            <p className="max-w-32 truncate text-[11px] text-slate-600">
                                {userEmail}
                            </p>
                        </div>
                    </div>
                    <Link
                        href={dashboardHref}
                        className="inline-flex shrink-0 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                    >
                        Dashboard
                    </Link>
                </div>
            )}
        </header>
    )
}

export default NavigationBar
