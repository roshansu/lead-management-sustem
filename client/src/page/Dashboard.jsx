import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WebsiteLeadTable from "../components/website/WebsiteLeadTable";
import MetaLeadTable from "../components/meta/metaLeadTable";
import GoogleLeadTable from "../components/google/GoogleLeadTable";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import apiCall from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import EmployeeTable from "../components/employee/EmployeeTable";
import AssignLeadModal from "../components/AssignLeadModal";
import AllAssignedLeadTable from '../components/allLead/AllAssignedLead'
import useDebounce from "../hooks/useDebounce";
import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";

// const leads = [
//   {
//     _id: 1,
//     name: "Roshan Kumar",
//     email: "roshan@gmail.com",
//     phone: "9876543210",
//     service: "Web Development",
//     campaign: "Festival sale",
//     platform: "Facebook",
//     keyword: "Web development company",
//     createdAt: new Date(),
//     assignedTo: null
//   },
//   {
//     _id: 2,
//     name: "Rahul Sharma",
//     email: "rahul@gmail.com",
//     phone: "9999999999",
//     campaign: "Summer sale",
//     platform: "Instagram",
//     keyword: "mern stack developer",
//     createdAt: new Date(),
//     assignedTo: {
//       name: "Amit Verma"
//     }
//   }
// ];

const employees = [
  {
    _id: 1,
    name: "Roshan Kumar",
    email: "roshan@gmail.com",
    phone: "9876543210",
    totalAssignedLeads: 18,
  },
  {
    _id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9999999999",
    totalAssignedLeads: 12,
  },
];

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState("");
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("website");
  const [curr, setCurr] = useState("website");
  const [campaign, setCampaign] = useState("");
  const [keyword, setKeyword] = useState("");
  const [service, setService] = useState("");
  const [platform, setPlatform] = useState("");
  const [showPage, setShowPage] = useState(false);
  const debounceSearch = useDebounce(search, 500);
  const [selectedLead, setSelectedLead] = useState('')
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [assignedLeads, setAssignedLeads] = useState([])
    const [assignedSource, setAssignedSource] = useState('')

  // if(curr === 'website' || curr === 'meta' || curr === 'google'){
  //     setShowPage(true)
  // }

  const selectedComponent = {
    website: <WebsiteLeadTable setSelectedLead={setSelectedLead} setShowAssignModal={setShowAssignModal} leads={leads} />,
    meta: <MetaLeadTable setSelectedLead={setSelectedLead} setShowAssignModal={setShowAssignModal} leads={leads} />,
    google: <GoogleLeadTable setSelectedLead={setSelectedLead} setShowAssignModal={setShowAssignModal} leads={leads} />,
    employee: <EmployeeTable  employees={employees} debounceSearch={debounceSearch} />,
    assigned: <AllAssignedLeadTable leads={assignedLeads} />,
    analytics: <AnalyticsDashboard/>
  };

  function cleanFilter() {
    setCampaign("");
    setKeyword("");
    setService("");
    setPlatform("");
    setSearch("");
    setAssignedSource("")
    // getData()
  }

  async function getData() {
    try {
      console.log("source", source);
      console.log("platform", platform);
      setLoading(true);
      const res = await apiCall(
        `/leads?page=${currentPage}&campaign=${campaign}&keyword=${keyword}&source=${source}&platform=${platform}&service=${service}&search=${debounceSearch}`,
      );
      setLeads(res.leads);
      setData(res);
      setLoading(false);
      console.log(res);
    } catch (err) {}
  }

    async function getAssignedLead() {
    try {
      console.log("source", source);
      console.log("platform", platform);
      setLoading(true);
      const res = await apiCall(
        `/leads/assigned?page=${currentPage}&source=${assignedSource}&search=${debounceSearch}`,
      );
      setAssignedLeads(res.leads);
      setData(res);
      setLoading(false);
      console.log(res);
    } catch (err) {}
  }

  useEffect(() => {
    if(curr !== 'assigned' ) return
    // console.log("useefeect", source);
    getAssignedLead();
  }, [
    currentPage,
    assignedSource,
    curr,
    debounceSearch,
  ]);

  useEffect(() => {
    if(curr === 'employee' || curr === "assigned") return
    console.log("useefeect", source);
    getData();
  }, [
    currentPage,
    source,
    campaign,
    service,
    keyword,
    platform,
    debounceSearch,
  ]);

  return (
    <div className="flex">
      <Sidebar
        curr={curr}
        setSource={setSource}
        cleanFilter={cleanFilter}
        setCurr={setCurr}
      />
      <div className="mt-24 px-4 mb-10 w-[90%] max-h-screen overflow-y-scroll">
        {loading ? <Loader /> : selectedComponent[curr]}
      </div>
      <Navbar
        setSearch={setSearch}
        search={search}
        setCampaign={setCampaign}
        setService={setService}
        setKeyword={setKeyword}
        setPlatform={setPlatform}
        setAssignedSource={setAssignedSource}
        curr={curr}
        fetchDataByFilter={getData}
        setCurr={setCurr}
        clearFilter={cleanFilter}
        getData={getData}
      />

      {curr === "website" || curr === "meta" || curr === "google" || curr === "assigned" ? (
        <Pagination
          currentPage={Number(data.currentPage)}
          totalPages={Number(data.totalPages)}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}

      {showAssignModal && (
        <AssignLeadModal
          selectedLead={selectedLead}
          setShowAssignModal={setShowAssignModal}
        //   handleAssignLead={handleAssignLead}
        />
      )}
    </div>
  );
};

export default Dashboard;
