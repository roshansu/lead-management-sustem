import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardCheck,
  ChevronDown,
  Globe,
 Monitor,
  BadgeHelp,
  
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({setCurr, curr, setSource, cleanFilter}) {
  const [openLeads, setOpenLeads] = useState(true);

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-xl">
          L
        </div>

        <div className="ml-3">
          <h1 className="font-bold text-gray-900 text-lg">LeadFlow</h1>
          <p className="text-xs text-gray-500">Lead Management</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <p className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">
          Main Menu
        </p>

        <nav className="space-y-2">
          {/* All Leads */}
          {/* <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white shadow-md">
            <Users size={20} />
            <span className="font-medium">
              All Leads
            </span>
          </button> */}

          <div className="w-full bg-white p-4">
            {/* All Leads */}
            <button
              onClick={() => setOpenLeads(!openLeads)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gray-900 text-white shadow-md">
              <div className="flex items-center gap-3">
                <Users size={20} />
                <span className="font-medium">Leads</span>
              </div>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openLeads ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sub Menu */}
            {openLeads && (
              <div className="ml-6 mt-2 space-y-2">
                <button onClick={()=>{setCurr('website'), setSource('website'), cleanFilter()}} className={`w-full ${curr === 'website'?'bg-gray-200':''} flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-all`}>
                  <Globe size={16} />
                  Website Leads
                </button>

                <button onClick={()=>{setCurr('meta'), setSource('meta ads'), cleanFilter()}} className={`w-full ${curr === 'meta'?'bg-gray-200':''} flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-all`}>
                  <Monitor size={16} />
                  Meta Ads
                </button>

                <button onClick={()=>{setCurr('google'), setSource('google ads'), cleanFilter()}} className={`w-full ${curr === 'google'?'bg-gray-200':''} flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-all`}>
                  <BadgeHelp size={16} />
                  Google Ads
                </button>
              </div>
            )}
          </div>

          {/* Add Employee */}
          <button onClick={()=>setCurr('employee')} className={`w-full ${curr === 'employee'? 'bg-gray-200':''} flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all`}>
            <UserPlus size={20} />
            <span className="font-medium">Employee</span>
          </button>

          {/* Assigned Leads */}
          <button onClick={()=>setCurr('assigned')} className={`w-full ${curr === 'assigned' ? 'bg-gray-200':''} flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all`}>
            <ClipboardCheck size={20} />
            <span className="font-medium">Assigned Leads</span>
          </button>
        </nav>
      </div>

      {/* Bottom User Card */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
            R
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Roshan Kumar</h4>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
