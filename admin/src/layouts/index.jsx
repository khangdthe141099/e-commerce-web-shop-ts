import React from 'react'
import Sidebar from "../app/components/sidebar";
import Topbar from "../app/components/topbar";
import './layouts.css'

function Layouts({ children }) {
  return (
    <>
    <Topbar />
    <div className="container">
        <Sidebar />
        { children }
    </div>
    </>
  )
}

export default Layouts