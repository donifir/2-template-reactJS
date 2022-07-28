import React from 'react'
import '../admin/css/adminlte.css'
import ContenWraperComponent from './components/ContenWraperComponent'
import ControlSidebarComponent from './components/ControlSidebarComponent'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import SidebarComponent from './components/SidebarComponent'

export default function Dashboard() {
  return (
    <div>
       <NavbarComponent/>
       <ControlSidebarComponent/>
       <SidebarComponent/>
       <ContenWraperComponent/>
       <FooterComponent/>
    </div>
  )
}
