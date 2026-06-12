import { useState, useEffect } from "react";
import apiCall from "../api/api";
import Loader from "./Loader";

export default function LeadsDetailModal({
  employee,
  setShowModal,
}) {

  const [loading, setLoading] = useState(true)
  const [leads, setLeads] = useState([])

  async function getEmployeeLeads() {
    try{
        setLoading(true)

        const res = await apiCall(`/employee/leads?id=${employee._id}`)
        console.log(res)
        setLeads(res.data?.assignedList)
    }catch(err){

    }
    setLoading(false)
  }

  useEffect(()=>{
    getEmployeeLeads()
  },[])

  // if(loading) return

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[1000px] rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Assigned Leads
            </h2>

            <p className="text-gray-500">
              {employee?.fullName} • {leads?.length} Leads
            </p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>

        </div>

        {/* Table */}
        <div className="max-h-[600px] overflow-y-auto">

          <table className="w-full">

            <thead className="sticky top-0 bg-gray-50">
              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Full Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Source
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Date
                </th>

              </tr>
            </thead>

            <tbody>
              {
                loading ? <p className="text-center p-3">Loading data...</p>:''
              }
              {leads?.map((lead) => (
                <tr
                  key={lead?._id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">


                      <span className="font-medium">
                        {lead?.fullName}
                      </span>

                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {lead?.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {lead?.phone}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {lead?.source}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {lead?.time}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}