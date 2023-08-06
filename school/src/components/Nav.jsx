import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Staff from './Staff'
import StaffForm from './StaffForm'

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/staff-form"}>staff-form</Link>
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>}></Route>
        <Route path='/staff' element={<Staff />}></Route>
        <Route path='/staff-form' element={<StaffForm />}></Route>
      </Routes>
    </div>
  )
}
