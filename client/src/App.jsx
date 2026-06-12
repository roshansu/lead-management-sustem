import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './page/Login'
import Dashboard from './page/Dashboard';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ProtectedAuth from './components/protectedRoute/ProtectedAuth';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={
           <ProtectedAuth>
            <Login/>
           </ProtectedAuth> 
        } />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
           </ProtectedRoute> 
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
