import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="navbar bg-mist-200 shadow-lg pb-4">
      <div className="navbar-start">
        <Link href="#" className="btn btn-ghost rounded-md hover:bg-gray-800 hover:text-white text-xl">
          Hire<span className="text-blue-600">Hub</span>
        </Link>
      </div>

      <div className="btn btn-ghost rounded-md text-gray-500 hover:bg-gray-800 hover:text-white font-bold">
        <Link href="/jobs">
          Browse Jobs
        </Link>
      </div>

      <div className="navbar-end">
        <Link href="#" className="btn bg-blue-600 border-0 mr-2.5">Sign Up</Link>
        <Link href="#" className="btn bg-blue-600 border-0">Post Job</Link>
      </div>
    </div>
  )
}

export default NavigationBar