import { useState, useEffect } from "react";
import Loader from "../Loader";
import apiCall from "../../api/api";
import LeadsDetailModal from "../LeadDetailModal";
import AddEmployeeModal from "../AddEmployeeModal";
import useDebounce from "../../hooks/useDebounce";

export default function EmployeeTable({debounceSearch}) {
  const [employees, setEmployees] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  //   const [assignedLeads, setAssignedLeads] = useState([]);

  async function getEmployee() {
    try {
      setLoading(true);
      const res = await apiCall(`/employee?search=${debounceSearch}`);
      setEmployees(res.data);
    } catch (err) {}
    setLoading(false);
  }

  function handleView(data) {
    setSelectedEmployee(data);
    setShowModal(true);
  }

  useEffect(() => {
    getEmployee();
  }, [debounceSearch]);

  if (loading) return <Loader />;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Employees</h2>

        <button onClick={()=>setShowAddEmployeeModal(true)} className="px-4 py-2 bg-gray-900 text-white rounded-md cursor-pointer">Add Employee</button>

        <span className="px-4 py-2 bg-gray-100 rounded-xl text-sm text-gray-700">
          Total Employees: {employees.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Employee
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
                className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                      {employee.name?.charAt(0)}
                    </div> */}

                    <div>
                      <h3 className="font-medium text-gray-900">
                        {employee.fullName}
                      </h3>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-600">{employee.email}</td>

                {/* Phone */}
                <td className="px-6 py-4 text-gray-600">{employee.phone}</td>

                {/* Assigned Leads */}
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                    {employee.assignedList?.length}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleView(employee)}
                    className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition-all">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <LeadsDetailModal
          employee={selectedEmployee}
          //   leads={assignedLeads}
          setShowModal={setShowModal}
        />
      )}

      {showAddEmployeeModal && (
        <AddEmployeeModal
          setShowModal={setShowAddEmployeeModal}
        />
      )}
    </div>
  );
}
