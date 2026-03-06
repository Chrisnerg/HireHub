"use client"

import Link from "next/link";
import NavigationBar from "@/app/components/NavigationBar";
import { IoMdArrowBack } from "react-icons/io";
import { BsBookmark, BsCheck2, BsBuildings } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { PiMoney } from "react-icons/pi";
import { WiTime5 } from "react-icons/wi";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { LuUsersRound } from "react-icons/lu";

import { useState } from "react";

const page = () => {
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <NavigationBar />

      <div className="flex my-6 ml-64">
        <Link href="/jobs" className="btn btn-ghost text-left rounded-md hover:bg-gray-800 hover:text-white text-base flex items-center gap-2 px-0">
          <IoMdArrowBack className="text-lg" />
          Back to Jobs
        </Link>
      </div>

      <div className="flex flex-row justify-center w-full gap-8">
        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          {/* Main Job Card */}
          <div className="card w-full bg-base-100 card-xl mb-5 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-16 rounded-full">
                    <span className="text-3xl">D</span>
                  </div>
                </div>

                <div>
                  <p className="text-md font-normal">Senior Frontend Engineer</p>
                  <p className="text-xs text-gray-500 font-mono">Stripe Fintech</p>
                </div>
              </h2>
              <div className="text-xs">
                <p className="badge badge-success badge-sm badge-soft px-1.5 mr-2.5">Full-time</p>
                <p className="badge badge-primary badge-sm badge-soft px-1.5 mr-2.5">Senior Level</p>
                <p className="badge badge-info badge-sm badge-soft px-1.5 mr-2.5">Featured</p>
                <p className="border-b-2 mt-5"></p>
              </div>
              <div className="flex justify-evenly card-actions">
                <div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <SlLocationPin className="text-xs" />
                    <p className="text-xs">Location</p>
                  </div>
                  <p className="text-sm">San Francisco</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <PiMoney className="text-sm" />
                    <p className="text-xs">Salary</p>
                  </div>
                  <p className="text-sm">$160k</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <LuUsersRound className="text-sm" />
                    <p className="text-xs">Applicants</p>
                  </div>
                  <p className="text-sm">1.3k</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <WiTime5 className="text-sm" />
                    <p className="text-xs">Posted</p>
                  </div>
                  <p className="text-sm">3d ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button className="btn flex-1 bg-blue-600 rounded-md text-white flex items-center justify-center gap-2">
                  Apply Now
                </button>
                <button
                  className={`btn w-10 h-10 border rounded-md flex items-center justify-center p-0 transition-colors duration-150 ${saved ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-neutral-200 text-black hover:bg-blue-50'}`}
                  onClick={() => setSaved((prev) => !prev)}
                  aria-label={saved ? 'Saved' : 'Save'}
                >
                  {saved ? (
                    <span className="relative flex items-center justify-center">
                      <BsBookmark size={20} />
                      <BsCheck2 size={14} className="absolute text-white bg-blue-600 rounded-full -bottom-1 -right-1" />
                    </span>
                  ) : (
                    <BsBookmark size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className="card w-full bg-base-100 card-xl shadow-sm mt-8 mb-20">
            <div className="card-body">
              <h2 className="card-title text-sm">
                About the Role
              </h2>
              <p className="text-xs text-gray-500">Join Stripe's frontend team to build the next generation of payment interfaces used by millions of businesses worldwide. You'll work on complex UI challenges, performance optimization, and developer experience improvements.</p>
              <p className="border-b-2 my-3"></p>

              <div>
                <h2 className="card-title text-sm pb-2.5">Responsibilities</h2>
                <div className="flex items-center gap-1">
                  <WiTime5 className="text-sm text-blue-600" />
                  <p className="text-sm text-gray-500">Build and maintain Stripe's customer-facing dashboard</p>
                </div>
                <div className="flex items-center gap-1">
                  <WiTime5 className="text-sm text-blue-600" />
                  <p className="text-sm text-gray-500">Collaborate with design and product teams</p>
                </div>
                <div className="flex items-center gap-1">
                  <WiTime5 className="text-sm text-blue-600" />
                  <p className="text-sm text-gray-500">Mentor junior engineers</p>
                </div>
                <div className="flex items-center gap-1">
                  <WiTime5 className="text-sm text-blue-600" />
                  <p className="text-sm text-gray-500">Drive technical decisions for the frontend stack</p>
                </div>
              </div>

              <p className="border-b-2 mt-5"></p>

              <div className="mt-5">
                <h3 className="card-title text-sm pb-2.5">Requirements</h3>
                <ul className="list-disc list-inside space-y-3 font-bold max-w-2xl mx-auto text-sm text-gray-500">
                  <li>5+ years of frontend experience</li>
                  <li>Deep expertise in React and TypeScript</li>
                  <li>Experience with design systems</li>
                  <li>Strong understanding of web performance</li>
                </ul>
              </div>

              <p className="border-b-2 mt-5"></p>

              <div>
                <h3 className="card-title text-sm pb-2.5">Skills & Technologies</h3>

                <div className="flex gap-x-3.5 pt-2.5">
                  <div className="bg-gray-300 w-fit rounded-md px-1.5 text-sm">
                    Next.js
                  </div>
                  <div className="bg-gray-300 w-fit rounded-md px-1.5 text-sm">
                    React
                  </div>
                  <div className="bg-gray-300 w-fit rounded-md px-1.5 text-sm">
                    TypeScript
                  </div>
                  <div className="bg-gray-300 w-fit rounded-md px-1.5 text-sm">
                    GraphQl
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="flex flex-col gap-6 w-full max-w-sm">
          {/* About Stripe Card */}
          <div className="card bg-base-100 border border-gray-200 rounded-xl shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-base font-bold mb-2">About Stripe</h2>
              <div className="flex items-center gap-3 mb-2">
                <div className="avatar placeholder">
                  <div className="bg-purple-600 text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold">ST</div>
                </div>
                <div>
                  <div className="font-semibold leading-tight text-base">Stripe</div>
                  <div className="text-xs text-gray-500">Fintech</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Stripe builds economic infrastructure for the internet.</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <BsBuildings className="text-lg text-gray-500" />
                  <span className="text-blue-700">1000–5000 employees</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <SlLocationPin className="text-lg text-gray-500" />
                  <span className="text-blue-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <LiaCalendarAltSolid className="text-lg text-gray-500" />
                  <span className="text-blue-700">Deadline: 4/1/2026</span>
                </div>
              </div>
            </div>
          </div>
          {/* Similar Jobs Card */}
          <div className="card bg-base-100 border border-gray-200 rounded-xl shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-base font-bold mb-2">Similar Jobs</h2>
              <div className="flex flex-col gap-4">
                {/* Job 1 */}
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-pink-500 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">FG</div>
                  </div>
                  <div>
                    <div className="font-semibold leading-tight text-sm">Full Stack Engineer</div>
                    <div className="text-xs text-gray-500">Figma · $170k – $230k</div>
                  </div>
                </div>
                {/* Job 2 */}
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-gray-800 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">NT</div>
                  </div>
                  <div>
                    <div className="font-semibold leading-tight text-sm">Frontend Engineer (Intern)</div>
                    <div className="text-xs text-gray-500">Notion · $35–$45 USD/hr</div>
                  </div>
                </div>
                {/* Job 3 */}
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-green-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">PS</div>
                  </div>
                  <div>
                    <div className="font-semibold leading-tight text-sm">Backend Engineer — Database</div>
                    <div className="text-xs text-gray-500">PlanetScale · $155k – $200k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page