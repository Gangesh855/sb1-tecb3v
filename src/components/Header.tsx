import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, UserPlus, LogIn } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase size={24} />
          <span className="text-xl font-bold">JobBoard</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/jobs" className="hover:text-blue-200">Find Jobs</Link></li>
            <li><Link to="/post-job" className="hover:text-blue-200">Post a Job</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/register" className="hover:text-blue-200 flex items-center"><UserPlus size={18} className="mr-1" /> Register</Link></li>
            <li><Link to="/profile" className="hover:text-blue-200 flex items-center"><LogIn size={18} className="mr-1" /> Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header