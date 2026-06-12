import {
  Search,
  Filter,
  ChevronDown,
  Bell,
} from "lucide-react";
import SelectOption from "./SelectOption";

// const filterData = {
//   google:{
//     keyword: ["web development company", "mern stack developer", "software company", "mobile app development"],
//     campaign: ["Summer Sale", "Festival Offer", "Developer Hiring", "Student Outreach"]
//   },
//   meta:{
//     campaign: ["Summer Sale", "Festival Offer", "Developer Hiring", "Student Outreach"],
//     platform: ["facebook", "instagram"]
//   },
//   website:{
//     service: ["Web Development", "Mobile App Development", "UI/UX Design", "SEO", "Digital Marketing"]
//   }
// }

const filterOption = {
  google:[
    ["keyword","web development company", "mern stack developer", "software company", "mobile app development"],
    ["campaign","Summer Sale", "Festival Offer", "Developer Hiring", "Student Outreach"]
  ],
  meta:[
   ["campaign","Summer Sale", "Festival Offer", "Developer Hiring", "Student Outreach"],
   ["platform","facebook", "instagram"]
  ],
  website:[
    ["service","Web Development", "Mobile App Development", "UI/UX Design", "SEO", "Digital Marketing"]
  ],
  assigned:[
    ["source","website", "meta ads", "google ads"]
  ]
}



export default function Navbar({
curr, fetchDataByFilter, setPlatform, setService, setKeyword, 
setCampaign, clearFilter, getData, setSearch, search, setAssignedSource
}) {

  const stateOption ={
    google:[setKeyword, setCampaign],
    website: [setService],
    meta: [setCampaign, setPlatform],
    assigned: [setAssignedSource]
}

// console.log("stste", stateOption[curr])
  return (
    <div className="fixed ml-72 top-0  bg-white/90 backdrop-blur-md  px-4 py-3  ">

      {/* <div className="flex items-center justify-between">


        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            All Leads
          </h1>

          <p className="text-gray-500 mt-1">
            Manage and track incoming leads
          </p>
        </div>


        <div className="flex items-center gap-4">

    
          <button className="relative h-11 w-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all flex items-center justify-center">
            <Bell size={18} />

            <span className="absolute -top-1 -right-1 h-5 w-5 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>


          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2">
            <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
              R
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Roshan Kumar
              </h4>

              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Search & Filters */}
      <div className="flex items-center justify-between mt-2">

        {/* Search */}
        <div className="relative w-[450px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input value={search}
            type="text" onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search by name, email, phone..."
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* Filters */}
        <div className="flex ml-2 items-center gap-3">

          {/* Source */}
        {/* <select 
          className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all"
           name="Source" id="Source">
            <option  value="">Source</option>
            <option value="all">All</option>
            <option value="website">Website</option>
            <option value="google ads">Google Ads</option>
            <option value="meta ads">Meta Ads</option>
          </select> */}

        {/* Service */}

        {
          filterOption[curr]?.map((item, ind)=>(
            // console.log(stateOption[curr])
            <SelectOption setValue={stateOption[curr][ind]} ind={ind} item={item} key={ind} />
          ))
        }

        {/* <button onClick={fetchDataByFilter} className="px-4 ml-2 cursor-pointer py-2 hover:bg-gray-700 transition-colors duration-300 text-white bg-gray-900 rounded-md">Apply</button> */}
        {/* <button onClick={()=>{
          clearFilter()
          getData()
        }} className="px-4 ml-2 cursor-pointer py-2 hover:bg-red-700 transition-colors duration-300 text-white bg-red-900 rounded-md">Clear</button> */}

        {/* <select 
          className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all"
           name="Service" id="Service">
            <option  value="">Service</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO">SEO</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Web Development">Web Development</option>
          </select> */}

          {/* Campaign */}
        {/* <select 
          className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all"
           name="campaign" id="campaign">
            <option  value="">Campaign</option>
            <option value="Student Outreach">Student Outreach</option>
            <option value="Developer Hiring">Developer Hiring</option>
            <option value="Festival Offer">Festival Offer</option>
            <option value="Festival Offer">Summer Sale</option>
          </select> */}

          {/* Platform */}

        {/* <select
          className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all"
           name="platform" id="platform">
            <option  value="">Platform</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select> */}

          {/* Filter Button */}
          {/* <button className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-2xl shadow-lg hover:bg-black transition-all">
            <Filter size={16} />
            Filters
          </button> */}
        </div>
      </div>

      {/* Stats */}
      {/* <div className="flex gap-4 mt-5">

        <div className="bg-gray-100 px-4 py-2 rounded-xl">
          <span className="text-sm text-gray-600">
            Total Leads:
          </span>

          <span className="ml-2 font-bold text-gray-900">
            1,248
          </span>
        </div>

        <div className="bg-gray-100 px-4 py-2 rounded-xl">
          <span className="text-sm text-gray-600">
            New:
          </span>

          <span className="ml-2 font-bold text-gray-900">
            86
          </span>
        </div>

        <div className="bg-gray-100 px-4 py-2 rounded-xl">
          <span className="text-sm text-gray-600">
            Assigned:
          </span>

          <span className="ml-2 font-bold text-gray-900">
            534
          </span>
        </div>
      </div> */}
    </div>
  );
}