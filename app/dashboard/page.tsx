"use client";
import { GrOverview } from "react-icons/gr";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { useState } from "react";
import { FaGift, FaCheckCircle, FaChartLine, FaBookmark } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";

const page = () => {
                
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div>
            <div className="bg-base-100 shadow-sm w-full flex flex-col items-center">
                <div className="w-full max-w-3xl flex flex-col">
                    <div className='flex gap-x-3 items-center mt-6'>
                        {/* Avatar */}
                        <div className="avatar avatar-online">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-semibold text-lg'>Welcome back, Alex!</p>
                            <p className='text-gray-400 text-xs'>4 active applications · 4 saved jobs</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2.5 mt-6 mb-1.5">
                        {/* Overview Tab */}
                        <div
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium cursor-pointer ${activeTab === "overview" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-700"}`}
                            onClick={() => setActiveTab("overview")}
                        >
                            <GrOverview />
                            <span>Overview</span>
                        </div>
                        {/* Applications Tab */}
                        <div
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium cursor-pointer ${activeTab === "applications" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-700"}`}
                            onClick={() => setActiveTab("applications")}
                        >
                            <MdOutlineLibraryBooks />
                            <span>Applications</span>
                            <span className="ml-1 bg-gray-200 text-xs text-gray-600 px-2 py-0.5 rounded-full">4</span>
                        </div>
                        {/* Saved Jobs Tab */}
                        <div
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium cursor-pointer ${activeTab === "saved" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-700"}`}
                            onClick={() => setActiveTab("saved")}
                        >
                            <MdBookmarkBorder />
                            <span>Saved Jobs</span>
                            <span className="ml-1 bg-gray-200 text-xs text-gray-600 px-2 py-0.5 rounded-full">4</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Overview */}
            {activeTab === "overview" && (
                <div className="w-full flex flex-col items-center mt-6">
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {/* Total Applied */}
                        <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100">
                            <FaGift className="text-3xl text-blue-500 mb-2" />
                            <span className="text-2xl font-bold text-blue-700">4</span>
                            <span className="text-gray-500 text-sm mt-1">Total Applied</span>
                        </div>
                        {/* In Interview */}
                        <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100">
                            <FaCheckCircle className="text-3xl text-purple-500 mb-2" />
                            <span className="text-2xl font-bold text-purple-700">1</span>
                            <span className="text-gray-500 text-sm mt-1">In Interview</span>
                        </div>
                        {/* Offers */}
                        <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100">
                            <FaChartLine className="text-3xl text-green-500 mb-2" />
                            <span className="text-2xl font-bold text-green-700">0</span>
                            <span className="text-gray-500 text-sm mt-1">Offers</span>
                        </div>
                        {/* Saved Jobs */}
                        <div className="bg-base-100 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100">
                            <FaBookmark className="text-3xl text-orange-500 mb-2" />
                            <span className="text-2xl font-bold text-orange-700">4</span>
                            <span className="text-gray-500 text-sm mt-1">Saved Jobs</span>
                        </div>
                    </div>
                    <div className="w-full max-w-5xl bg-base-100 rounded-xl shadow p-4 border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-lg">Recent Applications</span>
                            <a href="#" className="text-blue-500 text-sm font-medium">View all</a>
                        </div>
                        <div className="divide-y">
                            {/* Application 1 */}
                            <div className="flex items-center py-4">
                                <div className="avatar mr-4">
                                    <div className="w-10 rounded-full bg-gray-900 flex items-center justify-center">
                                        <span className="text-white font-bold">VC</span>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="font-medium">Developer Advocate</span>
                                    <span className="text-xs text-gray-500">Vercel · Applied 8d ago</span>
                                </div>
                                <span className="badge badge-md badge-outline badge-purple-200 text-purple-700 font-medium">Interview</span>
                            </div>
                            {/* Application 2 */}
                            <div className="flex items-center py-4">
                                <div className="avatar mr-4">
                                    <div className="w-10 rounded-full bg-orange-500 flex items-center justify-center">
                                        <span className="text-white font-bold">RS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="font-medium">Software Engineer — Growth</span>
                                    <span className="text-xs text-gray-500">Resend · Applied 5d ago</span>
                                </div>
                                <span className="badge badge-md badge-outline badge-warning text-yellow-700 font-medium">Reviewing</span>
                            </div>
                            {/* Application 3 */}
                            <div className="flex items-center py-4">
                                <div className="avatar mr-4">
                                    <div className="w-10 rounded-full bg-gray-900 flex items-center justify-center">
                                        <span className="text-white font-bold">NT</span>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="font-medium">Frontend Engineer (Intern)</span>
                                    <span className="text-xs text-gray-500">Notion · Applied 2d ago</span>
                                </div>
                                <span className="badge badge-md badge-outline badge-info text-blue-700 font-medium">Applied</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                {/* Applications Content */}
                {activeTab === "applications" && (
                    <div className="w-full flex flex-col items-center mt-6">
                        <div className="w-full max-w-5xl">
                            <span className="font-semibold text-lg mb-4 block">My Applications</span>
                            <div className="flex flex-col gap-4">
                                {/* Application 1 */}
                                <div className="bg-base-100 rounded-xl shadow p-4 border border-gray-100 flex items-center">
                                    <div className="avatar mr-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">VC</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-semibold text-base">Developer Advocate</span>
                                        <span className="text-sm text-gray-500">Vercel · Remote</span>
                                        <div className="flex gap-6 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><circle cx="8" cy="8" r="7"/></svg> Applied 8d ago</span>
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M8 3v5l4 2"/></svg> Updated 2d ago</span>
                                        </div>
                                    </div>
                                    <span className="badge badge-md badge-outline badge-purple-200 text-purple-700 font-medium">Interview</span>
                                </div>
                                {/* Application 2 */}
                                <div className="bg-base-100 rounded-xl shadow p-4 border border-gray-100 flex items-center">
                                    <div className="avatar mr-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">RS</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-semibold text-base">Software Engineer — Growth</span>
                                        <span className="text-sm text-gray-500">Resend · Remote</span>
                                        <div className="flex gap-6 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><circle cx="8" cy="8" r="7"/></svg> Applied 5d ago</span>
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M8 3v5l4 2"/></svg> Updated Yesterday</span>
                                        </div>
                                    </div>
                                    <span className="badge badge-md badge-outline badge-warning text-yellow-700 font-medium">Reviewing</span>
                                </div>
                                {/* Application 3 */}
                                <div className="bg-base-100 rounded-xl shadow p-4 border border-gray-100 flex items-center">
                                    <div className="avatar mr-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">NT</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-semibold text-base">Frontend Engineer (Intern)</span>
                                        <span className="text-sm text-gray-500">Notion · New York, NY</span>
                                        <div className="flex gap-6 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><circle cx="8" cy="8" r="7"/></svg> Applied 2d ago</span>
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M8 3v5l4 2"/></svg> Updated 2d ago</span>
                                        </div>
                                    </div>
                                    <span className="badge badge-md badge-outline badge-info text-blue-700 font-medium">Applied</span>
                                </div>
                                {/* Application 4 */}
                                <div className="bg-base-100 rounded-xl shadow p-4 border border-gray-100 flex items-center">
                                    <div className="avatar mr-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">VC</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="font-semibold text-base">Design Engineer</span>
                                        <span className="text-sm text-gray-500">Vercel · Remote</span>
                                        <div className="flex gap-6 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><circle cx="8" cy="8" r="7"/></svg> Applied 15d ago</span>
                                            <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M8 3v5l4 2"/></svg> Updated 7d ago</span>
                                        </div>
                                    </div>
                                    <span className="badge badge-md badge-outline badge-error text-red-600 font-medium">Rejected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
          
            {/* Saved Jobs */}
            {activeTab === "saved" && (
                <div className="w-full flex flex-col items-center mt-6">
                    <div className="w-full max-w-5xl">
                        <span className="font-semibold text-lg mb-4 block">Saved Jobs (4)</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105 transition-transform">
                                <div className="card-body">
                                    <h2 className="card-title flex gap-3 items-center">
                                        <GoOrganization className="text-5xl" />
                                        <div>
                                            <p className="">Senior Frontend Engineer</p>
                                            <p className="px-1 text-xs font-normal">Stripe</p>
                                        </div>
                                    </h2>
                                    <div className="mt-2 flex gap-2">
                                        <span className="badge badge-success badge-soft px-1.5">Full-Time</span>
                                        <span className="badge badge-primary badge-soft px-1.5">Senior</span>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">San Francisco, CA · $160k – $220k · 47 applicants · 2d ago</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary">
                                            View Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105 transition-transform">
                                <div className="card-body">
                                    <h2 className="card-title flex gap-3 items-center">
                                        <GoOrganization className="text-5xl" />
                                        <div>
                                            <p className="">Backend Engineer — Database</p>
                                            <p className="px-1 text-xs font-normal">PlanetScale</p>
                                        </div>
                                    </h2>
                                    <div className="mt-2 flex gap-2">
                                        <span className="badge badge-success badge-soft px-1.5">Full-Time</span>
                                        <span className="badge badge-primary badge-soft px-1.5">Senior</span>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Remote · $155k – $200k · 29 applicants · Yesterday</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary">
                                            View Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105 transition-transform">
                                <div className="card-body">
                                    <h2 className="card-title flex gap-3 items-center">
                                        <GoOrganization className="text-5xl" />
                                        <div>
                                            <p className="">Product Designer</p>
                                            <p className="px-1 text-xs font-normal">Linear</p>
                                        </div>
                                    </h2>
                                    <div className="mt-2 flex gap-2">
                                        <span className="badge badge-success badge-soft px-1.5">Full-Time</span>
                                        <span className="badge badge-primary badge-soft px-1.5">Mid</span>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Remote · $110k – $150k · 61 applicants · 3d ago</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary">
                                            View Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105 transition-transform">
                                <div className="card-body">
                                    <h2 className="card-title flex gap-3 items-center">
                                        <GoOrganization className="text-5xl" />
                                        <div>
                                            <p className="">Head of Engineering</p>
                                            <p className="px-1 text-xs font-normal">Linear</p>
                                        </div>
                                    </h2>
                                    <div className="mt-2 flex gap-2">
                                        <span className="badge badge-success badge-soft px-1.5">Full-Time</span>
                                        <span className="badge badge-primary badge-soft px-1.5">Lead</span>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500">Remote · $220k – $300k · 18 applicants · 12d ago</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary">
                                            View Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default page