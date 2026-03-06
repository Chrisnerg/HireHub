"use client"

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const sidebarLinks = [
   { label: 'Overview' },
   { label: 'Manage Jobs' },
   { label: 'Applicants' },
   { label: 'Post New Job' },
];

function OverviewTab() {
   return (
      <>
         <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
         <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
               <span className="text-blue-600 text-3xl font-bold">10</span>
               <span className="text-xs text-neutral-500">Active Jobs</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
               <span className="text-purple-600 text-3xl font-bold">8</span>
               <span className="text-xs text-neutral-500">Total Applicants</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
               <span className="text-orange-500 text-3xl font-bold">2</span>
               <span className="text-xs text-neutral-500">In Interview</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
               <span className="text-green-600 text-3xl font-bold">1</span>
               <span className="text-xs text-neutral-500">Offers Extended</span>
            </div>
         </div>
         <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Recent Applications</h2>
            <table className="w-full text-sm">
               <thead>
                  <tr className="text-neutral-500 text-left">
                     <th className="py-2">Applicant</th>
                     <th className="py-2">Job</th>
                     <th className="py-2">Status</th>
                     <th className="py-2 text-center">Applied</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="py-2">Alex Johnson</td>
                     <td>Developer Advocate</td>
                     <td><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Interview</span></td>
                     <td className="text-center">8d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Alex Johnson</td>
                     <td>Software Engineer — Growth</td>
                     <td><span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Reviewing</span></td>
                     <td className="text-center">5d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Alex Johnson</td>
                     <td>Frontend Engineer (Intern)</td>
                     <td><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Applied</span></td>
                     <td className="text-center">2d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Alex Johnson</td>
                     <td>Design Engineer</td>
                     <td><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Rejected</span></td>
                     <td className="text-center">15d ago</td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Registered Users</h2>
            <table className="w-full text-sm">
               <thead>
                  <tr className="text-neutral-500 text-left">
                     <th className="py-2">User</th>
                     <th className="py-2">Email</th>
                     <th className="py-2 text-center">Applications</th>
                     <th className="py-2">Joined</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td className="py-2">Alex Johnson</td>
                     <td>alex@example.com</td>
                     <td className="text-center">4</td>
                     <td>30d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">María Garcia</td>
                     <td>maria@devstudio.io</td>
                     <td className="text-center">1</td>
                     <td>12d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Sam Okonkwo</td>
                     <td>sam@techcorp.dev</td>
                     <td className="text-center">1</td>
                     <td>7d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Priya Patel</td>
                     <td>priya@startup.co</td>
                     <td className="text-center">1</td>
                     <td>25d ago</td>
                  </tr>
                  <tr>
                     <td className="py-2">Chris Lee</td>
                     <td>chris@webagency.com</td>
                     <td className="text-center">1</td>
                     <td>2d ago</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   );
}

function ManageJobsTab() {
   return (
      <>
         <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>
         <div className="bg-white rounded-lg shadow p-6">
            <table className="w-full text-sm">
               <thead>
                  <tr className="text-neutral-500 text-left">
                     <th className="py-2">Job Title</th>
                     <th className="py-2">Company</th>
                     <th className="py-2">Type</th>
                     <th className="py-2">Applicants</th>
                     <th className="py-2">Status</th>
                     <th className="py-2">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Senior Frontend Engineer</td>
                     <td>Stripe</td>
                     <td>Full-time</td>
                     <td className="font-bold">47</td>
                     <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Active</span></td>
                     <td>
                        <span className="inline-flex gap-2">
                           <Button size="xs" variant="outline"><FiEdit2 /></Button>
                           <Button size="xs" variant="destructive"><FiTrash2 /></Button>
                        </span>
                     </td>
                  </tr>
                  <tr>
                     <td>Developer Advocate</td>
                     <td>Vercel</td>
                     <td>Full-time</td>
                     <td className="font-bold">83</td>
                     <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Active</span></td>
                     <td>
                        <span className="inline-flex gap-2">
                           <Button size="xs" variant="outline"><FiEdit2 /></Button>
                           <Button size="xs" variant="destructive"><FiTrash2 /></Button>
                        </span>
                     </td>
                  </tr>
                  {/* Add more job rows as needed */}
               </tbody>
            </table>
         </div>
      </>
   );
}

function ApplicantsTab() {
   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
   const statusOptions = [
      { label: 'Applied', color: 'bg-blue-100 text-blue-700' },
      { label: 'Reviewing', color: 'bg-orange-100 text-orange-700' },
      { label: 'Interview', color: 'bg-purple-100 text-purple-700' },
      { label: 'Offer 🎉', color: 'bg-green-100 text-green-700' },
      { label: 'Rejected', color: 'bg-red-100 text-red-700' },
   ];
   const [applicants, setApplicants] = useState([
      {
         name: 'Alex Johnson',
         email: 'alex@example.com',
         job: 'Developer Advocate',
         company: 'Vercel',
         applied: '8d ago',
         status: 'Interview',
      },
      {
         name: 'Alex Johnson',
         email: 'alex@example.com',
         job: 'Software Engineer — Growth',
         company: 'Resend',
         applied: '5d ago',
         status: 'Reviewing',
      },
      {
         name: 'Alex Johnson',
         email: 'alex@example.com',
         job: 'Frontend Engineer (Intern)',
         company: 'Notion',
         applied: '2d ago',
         status: 'Applied',
      },
      {
         name: 'Alex Johnson',
         email: 'alex@example.com',
         job: 'Design Engineer',
         company: 'Vercel',
         applied: '15d ago',
         status: 'Rejected',
      },
      {
         name: 'María Garcia',
         email: 'maria@devstudio.io',
         job: 'Senior Frontend Engineer',
         company: 'Stripe',
         applied: '3d ago',
         status: 'Interview',
      },
      {
         name: 'Sam Okonkwo',
         email: 'sam@techcorp.dev',
         job: 'Full Stack Engineer',
         company: 'Figma',
         applied: '6d ago',
         status: 'Reviewing',
      },
      {
         name: 'Priya Patel',
         email: 'priya@startup.co',
         job: 'Head of Engineering',
         company: 'Linear',
         applied: '20d ago',
         status: 'Offer 🎉',
      },
      {
         name: 'Chris Lee',
         email: 'chris@webagency.com',
         job: 'Senior Frontend Engineer',
         company: 'Stripe',
         applied: 'Yesterday',
         status: 'Applied',
      },
   ]);

   return (
      <>
         <h1 className="text-2xl font-bold mb-6">All Applicants</h1>
         <div className="bg-white rounded-lg shadow p-6">
            <table className="w-full text-sm">
               <thead>
                  <tr className="text-neutral-500 text-left">
                     <th className="py-2">Applicant</th>
                     <th className="py-2">Job Applied For</th>
                     <th className="py-2">Applied</th>
                     <th className="py-2">Status</th>
                     <th className="py-2">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {applicants.map((a, idx) => {
                     const statusObj = statusOptions.find(s => s.label === a.status) || statusOptions[0];
                     return (
                        <tr key={a.name + a.job}>
                           <td>
                              <div className="flex items-center gap-2">
                                 <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-50 font-bold text-blue-600 uppercase">
                                    {a.name[0]}
                                 </span>
                                 <div>
                                    {a.name}<br />
                                    <span className="text-xs text-neutral-400">{a.email}</span>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="flex items-center gap-2">
                                 <span className="inline-flex items-center justify-center h-8 w-8 rounded-full font-bold text-white text-xs" style={{background: '#222'}}>
                                    {a.company === 'Vercel' && 'VC'}
                                    {a.company === 'Resend' && 'RS'}
                                    {a.company === 'Notion' && 'NT'}
                                    {a.company === 'Stripe' && 'ST'}
                                    {a.company === 'Figma' && 'FG'}
                                    {a.company === 'Linear' && 'LN'}
                                 </span>
                                 <div>
                                    {a.job}<br />
                                    <span className="text-xs text-neutral-400">{a.company}</span>
                                 </div>
                              </div>
                           </td>
                           <td>{a.applied}</td>
                           <td>
                              <span className={`px-2 py-1 rounded text-xs ${statusObj.color}`}>{a.status}</span>
                           </td>
                           <td className="relative">
                              <div className="inline-block w-full">
                                 <button
                                    className="flex items-center gap-2 px-3 py-1 border rounded bg-white hover:bg-neutral-100 text-sm w-36 justify-between"
                                    style={{minWidth:'9rem'}}
                                    onClick={e => {
                                       e.preventDefault();
                                       setDropdownOpen(dropdownOpen === idx ? null : idx);
                                    }}
                                 >
                                    <span className="truncate">{a.status}</span>
                                    <FaChevronDown className="ml-1 text-xs" />
                                 </button>
                                 {dropdownOpen === idx && (
                                    <div className="absolute z-10 mt-1 w-36 bg-white border rounded shadow-lg">
                                       {statusOptions.map(option => (
                                          <button
                                             key={option.label}
                                             className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 ${option.label === a.status ? 'bg-neutral-100 font-semibold' : ''}`}
                                             onClick={e => {
                                                e.preventDefault();
                                                setApplicants(prev => prev.map((app, i) => i === idx ? { ...app, status: option.label } : app));
                                                setDropdownOpen(null);
                                             }}
                                          >
                                             {option.label}
                                          </button>
                                       ))}
                                    </div>
                                 )}
                              </div>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </>
   );
}

function PostNewJobTab() {
   return (
      <>
         <h1 className="text-2xl font-bold mb-6">Post a New Job</h1>
         <div className="bg-white rounded-lg shadow p-6 max-w-xl">
            <form className="flex flex-col gap-4">
               <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Job Title <span className="text-red-500">*</span></label>
                     <input className="w-full border rounded px-3 py-2" placeholder="e.g. Senior Frontend Engineer" required />
                  </div>
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Company <span className="text-red-500">*</span></label>
                     <input className="w-full border rounded px-3 py-2" placeholder="Select company" required />
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Job Type</label>
                     <select className="w-full border rounded px-3 py-2">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                     </select>
                  </div>
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Experience Level</label>
                     <select className="w-full border rounded px-3 py-2">
                        <option>Mid</option>
                        <option>Entry</option>
                        <option>Senior</option>
                        <option>Lead</option>
                     </select>
                  </div>
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Location</label>
                     <input className="w-full border rounded px-3 py-2" placeholder="Remote" />
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Min Salary (USD)</label>
                     <input className="w-full border rounded px-3 py-2" placeholder="e.g. 100000" type="number" />
                  </div>
                  <div className="flex-1">
                     <label className="block text-sm font-medium mb-1">Max Salary (USD)</label>
                     <input className="w-full border rounded px-3 py-2" placeholder="e.g. 150000" type="number" />
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Skills / Tags</label>
                  <input className="w-full border rounded px-3 py-2" placeholder="e.g. React, TypeScript, Node.js (comma separated)" />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Job Description <span className="text-red-500">*</span></label>
                  <textarea className="w-full border rounded px-3 py-2" placeholder="Describe the role, team, and what the candidate will be working on..." required />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Requirements</label>
                  <textarea className="w-full border rounded px-3 py-2" placeholder="List the key requirements, one per line..." />
               </div>
               <div className="flex gap-2 mt-2">
                  <Button type="submit" className="w-32">Publish Job</Button>
                  <Button type="button" variant="outline" className="w-32">Cancel</Button>
               </div>
            </form>
         </div>
      </>
   );
}

const Page = () => {
   const [activeTab, setActiveTab] = useState('Overview');

   function renderTab() {
      switch (activeTab) {
         case 'Overview':
            return <OverviewTab />;
         case 'Manage Jobs':
            return <ManageJobsTab />;
         case 'Applicants':
            return <ApplicantsTab />;
         case 'Post New Job':
            return <PostNewJobTab />;
         default:
            return null;
      }
   }

   return (
      <div className="flex min-h-screen">
         {/* Sidebar */}
         <aside className="w-64 bg-white border-r border-border-default flex flex-col justify-between py-6 px-4">
            <div>
               <div className="mb-8">
                  <span className="font-bold text-lg text-blue-900">Admin Panel</span>
                  <div className="text-xs text-neutral-500">HireHub</div>
               </div>
               <nav className="flex flex-col gap-2">
                  {sidebarLinks.map((link) => (
                     <button
                        key={link.label}
                        onClick={() => setActiveTab(link.label)}
                        className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors ${activeTab === link.label ? 'bg-blue-100 text-blue-900 font-semibold' : 'text-neutral-700 hover:bg-blue-50'}`}
                     >
                        {link.label}
                     </button>
                  ))}
               </nav>
            </div>
            <Button variant="destructive" className="w-full mt-8" size="default">
               Log out
            </Button>
         </aside>

         {/* Main Content */}
         <main className="flex-1 bg-neutral-50 p-8 overflow-y-auto">
            {renderTab()}
         </main>
      </div>
   );
};

export default Page;