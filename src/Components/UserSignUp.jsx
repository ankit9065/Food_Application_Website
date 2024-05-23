import React, { useState } from 'react'
import "../Style/UserSignup.css"
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    let [name, setname] = useState("")
    console.log(name);

    let [email, setemail] = useState("")
    console.log(email);

    let [phone, setphone] = useState("")
    console.log(phone);

    let [password, setPassword] = useState("")
    console.log(password);

  return (
    <div id='UserSignup'>
            <form action="">
            <Link to="/user">Back</Link>
                <input type="text"  value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter Admin name'/>
                <br />

                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Email'/>
                <br /> 

                <input type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder='Enter Phone' pattern='[0-9]{10}'/>
                <br />

                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Enter Password'/>
                <br />

                <button>Register</button>

            </form>
    </div>
  )
}

export default UserSignUp
