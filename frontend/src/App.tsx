import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
// there are the following pages: login, signup, dashboard
  return (
    <div className=' font-opensans'>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </div>
  )
}

export default App
