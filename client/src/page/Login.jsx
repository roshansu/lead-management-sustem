import { useState } from "react";
import { toast } from "react-toastify";
import apiCall from "../api/api";
import { setUserData } from "../utils/setLocalData";

// toast.success("Lead Added Successfully");
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e) {
        e.preventDefault()
        if(!email && password) return toast.warning("Please fill all field")
        toast.info("Login please wait...")
        
        const res = await apiCall('/user/login', 'POST', {email, password})

        if(res.success){
            toast.success("Login success")
            setUserData(res)
            window.location.href ='/dashboard'
        }else{
            toast.error(res.message)
        }
        console.log(email, password)
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          {/* Logo */}
          {/* <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-2xl font-bold">
              L
            </div>
          </div> */}

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                {/* <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Forgot Password?
                </button> */}
              </div>

              <input
                type="password"
                required
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>
            </div> */}

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          {/* <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>

            <span className="px-4 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 border-t border-gray-300"></div>
          </div> */}

          {/* Google Button */}
          {/* <button className="w-full border border-gray-300 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all">
            Continue with Google
          </button> */}

          {/* Footer */}
          {/* <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?
            <span className="text-gray-900 font-semibold cursor-pointer ml-1">
              Sign Up
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

