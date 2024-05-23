import React, { useState } from 'react'
import "../Style/AdminSignup.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminSignUp = () => {
    let [name, setname] = useState("")
    console.log(name);

    let [email, setemail] = useState("")
    console.log(email);

    let [phone, setphone] = useState("")
    console.log(phone);

    let [password, setPassword] = useState("")
    console.log(password);

    let admins = {name, email, phone, password}

    let addAdmin=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:1000/Manager',admins)
      .then((resp)=>{
        alert("Admin added successfully")
      })
      .catch((error)=>{
        alert("Invalid Data")
      })
    }

  return (
      <div id='AdminSignup'>
        <form onSubmit={addAdmin}>
            
            <Link to="/admin">Back</Link>
            <input required type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter Admin name'/>
            <br />

            <input required type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Email'/>
            <br /> 

            <input required type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter Phone' pattern='[0-9]{10}'/>
            <br />

            <input required type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Enter Password'/>
            <br />

            <button>Register</button>

          </form>
    </div>
  )
}

export default AdminSignUp
