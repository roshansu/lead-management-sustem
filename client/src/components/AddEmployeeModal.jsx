import { useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import apiCall from "../api/api";
import { toast } from "react-toastify";

export default function AddEmployeeModal({
  setShowModal,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

const generatePassword = () => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "@#$%&*!";

  const allChars =
    upperCase +
    lowerCase +
    numbers +
    specialChars;

  let password = "";

  // At least one of each
  password += upperCase[
    Math.floor(Math.random() * upperCase.length)
  ];

  password += lowerCase[
    Math.floor(Math.random() * lowerCase.length)
  ];

  password += numbers[
    Math.floor(Math.random() * numbers.length)
  ];

  password += specialChars[
    Math.floor(Math.random() * specialChars.length)
  ];

  // Remaining characters
  for (let i = 0; i < 8; i++) {
    password += allChars[
      Math.floor(Math.random() * allChars.length)
    ];
  }

  // Shuffle password
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  setFormData((prev) => ({
    ...prev,
    password,
  }));
};

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(formData)
    toast.info("Adding employee...")
    try{
      const res = await apiCall('/user/register', "POST", formData)
      console.log(res)

      if(res.success){
        toast.success("Employee addedd")
      }
      else{
        toast.error(res.message)
      }
    }catch(err){

    }

  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[550px] rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Add Employee
            </h2>

            <p className="text-gray-500 mt-1">
              Create a new employee account
            </p>
            <p className="text-blue-500 mt-1">
              After creating login detail will sent to employee email
            </p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 pr-24"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>
          </div>

          {/* Generate Password */}
          <button
            type="button"
            onClick={generatePassword}
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
          >
            <RefreshCw size={18} />
            Generate Password
          </button>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() =>
                setShowModal(false)
              }
              className="px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-black"
            >
              Create Employee
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}