import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router'
import {jwtDecode} from "jwt-decode"

function ProtectedRoute({children}) {
  const jwtToken = Cookies.get('jwt_token')
  if(jwtToken === undefined){
    return <Navigate to="/login" replace={true}/>
  }
  try{
     const decoded = jwtDecode(jwtToken)
     if(decoded.exp * 1000 < Date.now()){
      Cookies.remove("jwt_token")
      return <Navigate to="/login"/>
     }
  }
  catch{
      Cookies.remove("jwt_token")
      return <Navigate to="/login"/>
  }
  return children
}

export default ProtectedRoute
