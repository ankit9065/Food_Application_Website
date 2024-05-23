import React from 'react'
import '../Style/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landingHead'>
      <h1>Landing Page</h1>
        <div className="LandingPage">
          <div className="sub_lp">
              <Link to="/admin">
                <img id='i1' src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="" />
                <h2>Admin</h2>
              </Link>
              
              <Link to="/user">
                <img id='i2' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCf31SSHaH1Z8oPndTOFf1FctAz3_1GSQCe_7AA4wsDvpxNp2xh3pck7M5HGHj97zG8g&usqp=CAU"alt="" />
                <h2>User</h2>
              </Link>
          </div>
      </div>
    </div>
  )
} 

export default LandingPage
