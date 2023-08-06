import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Staff from './components/Staff'
import StaffForm from './components/StaffForm'

function App() {
  return(
    <>
      <div>
        <h1>Here with api</h1>
        <Staff/>
        <StaffForm />
      </div>
    </>
  )
}

export default App
