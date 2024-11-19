import React from 'react'
import  React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { IoAnalyticsOutline } from 'react-icons/io5';
const UserState = (props) => {

  let userDetails = JSON.parse(localStorage.getItem('Ecomlogin'))


 const [user, setuser] = useState({
login:userDetails ? userDetails.login :false,
email:userDetails?userDetails.email :""
});

// function of logout*************************

function logout(){
  localStorage.removeItem('EcomAuth')
  setuser({login:false,email:""})
  
}
console.log(user)

function loginUser(ans){
  console.log(ans)
  JSON.stringify({login:true, email:ans.email})
  // localStorage.setItem('Econlogin','JSON.stringify({login:true,email:ans.email})')
  setuser({login:true,email:ans.email})
}


  return (
    <UserContext.Provider value={{user,setuser,loginUser,logout}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
