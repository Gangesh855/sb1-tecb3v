import React from 'react'

const JobListingsPage: React.FC = () => {
  // Mock job data (replace with actual data fetching logic)
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA' },
    { id: 2, title: 'Product Manager', company: 'Startup Inc', location: 'New York, NY' },
    { id: 3, title: 'Data Analyst', company: 'Big Data Corp', location: 'Chicago, IL' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListingsPage