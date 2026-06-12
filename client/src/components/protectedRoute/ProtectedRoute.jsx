import React from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute= ({children}) => {
  const token = localStorage.getItem("token")
    // console.log(token)
  if(token){
    return children
  }

  return <Navigate to={'/'} replace/>

}

export default ProtectedRoute
