import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './admin/Dashboard';
import User from './user/User';


export default function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/user" element={<User />}/>
    </Routes>
  </BrowserRouter>
  )
}
