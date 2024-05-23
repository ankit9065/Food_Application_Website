import React from 'react'
import '../Style/AdminNavbar.css'
import { Route, Routes } from 'react-router-dom'

import AdminNavbar from './AdminNavbar'
import AdminView from './AdminView'
import AdminAddProduct from './AdminAddProduct'
import EditProduct from './EditProduct'

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/adminView' element={<AdminView/>}/>
        <Route path='/adminAddProduct' element={<AdminAddProduct/>}/>
        <Route path='/EditProduct/:id' element={<EditProduct/>}/>
      </Routes>
    </div>
  )
}

export default AdminDashboard
