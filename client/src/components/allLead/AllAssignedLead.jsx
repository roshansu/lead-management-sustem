export default function AllAssignedLeadTable({
  leads,
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Assigned Leads
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            All leads assigned to employees
          </p>
        </div>

        <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm text-gray-700">
          Total: {leads?.length}
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="bg-gray-50">

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

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Assigned To
              </th>
{/* 
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Action
              </th> */}

            </tr>
          </thead>

          <tbody>

            {leads?.map((lead) => (
              <tr
                key={lead._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-all"
              >

                {/* Full Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">


                    <span className="font-medium text-gray-900">
                      {lead.fullName}
                    </span>

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

                {/* Source */}
                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {lead.source}
                  </span>

                </td>

                {/* Time */}
                <td className="px-6 py-4 text-gray-600">
                  {lead.time}
                </td>

                {/* Assigned To */}
                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">

                    <span className="text-gray-800">
                      {lead.assignedTo}
                    </span>

                  </div>

                </td>

                {/* Action */}
                {/* <td className="px-6 py-4">

                  <button
                    className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition-all"
                  >
                    View
                  </button>

                </td> */}

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}