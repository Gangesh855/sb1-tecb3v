import React, { useState } from 'react'

const JobPostingPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle job posting submission (e.g., API call)
    console.log('Job posted:', { jobTitle, company, location, description })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="jobTitle" className="block mb-1">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-1">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Job Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Post Job
        </button>
      </form>
    </div>
  )
}

export default JobPostingPage