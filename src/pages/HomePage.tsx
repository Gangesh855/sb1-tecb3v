import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-xl mb-8">Search thousands of job listings from top companies</p>
      <div className="max-w-xl mx-auto">
        <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition duration-300">
            <Search size={20} />
          </button>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/jobs" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
          Browse All Jobs
        </Link>
      </div>
    </div>
  )
}

export default HomePage