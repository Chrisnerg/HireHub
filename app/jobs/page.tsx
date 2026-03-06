import { IoIosArrowDown } from "react-icons/io";
import { GoOrganization } from "react-icons/go";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link";

const page = () => {
    return (
        <div className="relative min-h-screen">
            {/* Back Home button at top left */}
            <Link
                href="/"
                className="absolute btn btn-ghost top-4 left-4 hover:bg-gray-800 hover:text-white px-4 rounded-md shadow z-10"
            >
                Back Home
            </Link>

            {/* Navigation Bar */}
            <div className="navbar bg-base-100 shadow-sm min-h-30 mb-10">
                {/* ...existing nav content, remove old Back Home */}
                <div className="m-auto">
                    <div className="text-2xl font-semibold text-blue-600 mb-2">
                        Browse Jobs
                    </div>
                    <div>
                        {/* Search */}
                        <label className="input md:min-w-200 sm:min-w-100 shadow-lg bg-gray-200">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="" placeholder="Search" />
                        </label>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn ml-1 bg-white text-black border border-black hover:bg-black hover:text-white">
                                Job Type
                                <IoIosArrowDown />
                            </div>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md">
                                <li><a>Full-Time</a></li>
                                <li><a>Part-Time</a></li>
                                <li><a>Contract</a></li>
                                <li><a>Remote</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white text-black border border-black hover:bg-black hover:text-white">
                                Experience
                                <IoIosArrowDown />
                            </div>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md">
                                <li><a>Intern</a></li>
                                <li><a>Junior</a></li>
                                <li><a>Mid</a></li>
                                <li><a>Senior</a></li>
                                <li><a>Lead</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Cards */}
            <div className="mb-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
                    <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border border border-blue-600 bg-white w-full hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border border border-blue-600 bg-white w-full shadow-md hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border border border-blue-600 bg-white w-full hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border bg-white w-full border border-blue-600 hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border border border-blue-600 bg-white w-full hover:scale-105">
                        <div className="card-body">
                            <h2 className="card-title">
                                <GoOrganization className="text-5xl" />
                                <div>
                                    <p className="">Architecture Engineer</p>
                                    <p className="px-1 text-xs font-normal">Cool Company</p>
                                </div>
                            </h2>
                            <div className="mt-2">
                                <p className="badge badge-success badge-soft mr-3 px-1.5">Full-Time</p>
                                <p className="badge badge-primary badge-soft px-1.5">Senior</p>
                            </div>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    View Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <Pagination className="mb-3.5">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default page