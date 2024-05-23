import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Style/User.css'

const UserLogin = () => {
  let [uname, setUname] = useState("")
  console.log(uname);

  let [password, setPassword] = useState("")
  console.log(password);

  function login(){
    if(uname === "user" && password === "67890"){
      alert("User logged in Succesfully")
    }
    else{
      alert("User login Failed")
    }
    
  }
  return (
      <div className='UserLogin'>
          <form action="">
          <Link className='link1' to="/">Back</Link>
            <input type="text" onChange={(e)=>{setUname(e.target.value)}} value={uname} placeholder='Enter Username'/>
            <br />

            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Enter Password'/>
            <br /> 

            <button onClick={login}>Submit</button>

            <p>New user register? <Link to ="/userSignup">SignUp</Link></p>

          </form>
      </div>
  )
}

export default UserLogin
