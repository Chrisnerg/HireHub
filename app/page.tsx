import NavigationBar from "./components/NavigationBar";
import { GoOrganization } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero */}
      <div
        className="hero min-h-150"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?semt=ais_hybrid&w=740&q=80",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Find your next dream job in tech</h1>
            <p className="mb-5">
              Browse thousands of curated roles at the world's best tech companies. From startups to industry leaders — your next opportunity is here.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Featured */}
      <div className="text-center font-semibold text-2xl text-blue-600 mt-10 mb-5">Browse Our Featured Jobs</div>

      {/* Job Cards */}
      <div className="flex mb-10">
        <div className="m-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 gap-y-2.5 sm:grid-cols-1 gap-x-10">

          <div className="card card-border bg-white w-105 shadow-md">
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
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="card card-border bg-white w-105">
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
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="card card-border bg-white w-105">
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
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page