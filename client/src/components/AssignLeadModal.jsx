import { useState, useEffect } from "react";
import apiCall from "../api/api";
import Loader from "./Loader";
import { toast } from "react-toastify";

export default function AssignLeadModal({
  selectedLead,
  setShowAssignModal,
}) {
  const [employees, setEmployees] = useState(true);
  const [loading, setLoading] = useState(true);

  async function getEmployee() {
    try {
      setLoading(true);
      const res = await apiCall("/employee");
      setEmployees(res.data);
    } catch (err) {}
    setLoading(false);
  }
  // console.log(selectedLead)

  async function handleAssignLead(leadId, employeeId, name) {
    try{
      toast.info("Assigning please wait...")
        const res = await apiCall(`/leads?leadId=${leadId}&employeeId=${employeeId}&name=${name}`, "POST")
      // console.log(res)
        if(res.success){
          toast.success("Assigned success")
        }else{
          toast.error(res.message)
        }
    }catch(err){

    }
  }


  useEffect(() => {
    getEmployee();
  }, []);

  // if (loading) return <Loader />;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[850px] rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Assign Lead</h2>

            <p className="text-gray-500 mt-1">
              Assign "{selectedLead?.fullName}" to an employee
            </p>
          </div>

          <button
            onClick={() => setShowAssignModal(false)}
            className="text-2xl text-gray-400 hover:text-black">
            ×
          </button>
        </div>

        {/* Employee List */}
        <div className="max-h-[500px] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Assigned Leads
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {employees?.map((employee) => (
                <tr
                  key={employee._id}
                  className="border-b border-gray-100 hover:bg-gray-50">
                  {/* Name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{employee.fullName}</span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-600">{employee.email}</td>

                  {/* Phone */}
                  <td className="px-6 py-4 text-gray-600">{employee.phone}</td>

                  {/* Total Leads */}
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-gray-100">
                      {employee?.assignedList?.length}
                    </span>
                  </td>

                  {/* Assign Button */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        handleAssignLead(selectedLead._id, employee._id, employee.fullName)
                      }
                      className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition-all">
                      Assign
                    </button>
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
