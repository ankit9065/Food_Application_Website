import axios from 'axios';
import '../Style/Admin.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  let [uname, setUname] = useState("")
  // console.log(uname);

  let [password, setPassword] = useState("")
  // console.log(password);

  let [admin, setAdmin] = useState([])

  let navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:1000/Manager')
    .then((res)=>{
      console.log(res.data);
      setAdmin(res.data)
  })
    .catch((error)=>{
      console.log(error);
  })
  },[])

  function login(e){
    let a = false;
    e.preventDefault()
    admin.map((x)=>{
      if(uname == x.email && password == x.password){
        alert("Logged in successfully")
        navigate('/admindashboard')
        a= true
      }
    })
    if(a == false){
      alert("Invalid username or password")
    }
  }
  
  return (
      <div className='adminHead'>
        <h1>Admin Login Page</h1>
          <div className='AdminLogin'>
                <form action="">
                  <Link id='link1' to="/">Back</Link>
                  <input type="text" onChange={(e)=>{setUname(e.target.value)}} value={uname} placeholder='Enter Username'/>
                  <br />

                  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Enter Password'/>
                  <br /> 

                  <button onClick={login}>Submit</button>

                  <p>New user register? <Link to ="/adminSignup">SignUp</Link></p>

              </form>
          </div>
      </div>
  )
}

export default AdminLogin
