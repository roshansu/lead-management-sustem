export default function WebsiteLeadTable({ leads,setSelectedLead, setShowAssignModal }) {
  
  function handleAssign(lead){
    setSelectedLead(lead)
    setShowAssignModal(true)
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Table Header */}
      <div className="px-6 flex justify-around items-center py-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Leads
        </h2>
        <h3>{leads?.length} leads</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Name
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Email
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Phone
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Service
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Date
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Assigned To
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {leads?.map((lead) => (
              <tr
                key={lead._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-all"
              >
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">

                    {/* <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                      {lead.name?.charAt(0)}
                    </div> */}

                    <div>
                      <h3 className="font-medium text-gray-900">
                       {lead.fullName}

                      </h3>
                    </div>

                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-600">
                  {lead.email}
                </td>

                {/* Phone */}
                <td className="px-6 py-4 text-gray-600">
                  {lead.phone}
                </td>

                {/* Service */}
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {lead.service}
                  </span>
                </td>

                {/* Time */}
                <td className="px-6 py-4 text-gray-600">
                  {
                    lead.time
                  }
                </td>

                {/* Assigned To */}
                <td className="px-6 py-4">

                  {lead.assignedTo ? (
                    <div className="flex items-center gap-2">

                      {/* <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                        {lead.assignedTo.name?.charAt(0)}
                      </div> */}

                      <span className="text-gray-800">
                        {lead.assignedTo}
                      </span>

                    </div>
                  ) : (
                    <span className="text-red-500 text-sm">
                      Not Assigned
                    </span>
                  )}

                </td>

                {/* Action */}
                <td className="px-6 py-4">

                  {!lead.assignedTo ? (
                    <button  onClick={()=>handleAssign(lead)}
                      className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition-all"
                    >
                      Assign
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl"
                    >
                      View
                    </button>
                  )}

                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}