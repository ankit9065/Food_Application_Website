import React from 'react'
import '../Style/AdminNavbar.css'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='AdminNavbar'>
      <div className='logo'>
        <h1>Khana <span>Khazana</span></h1>
      </div>

      <div className='options'>
        <Link to="/admindashboard/adminView">View</Link>
        <Link to="/admindashboard/adminAddProduct">Add</Link>
      </div>
    </div>
  )
}

export default AdminNavbar
