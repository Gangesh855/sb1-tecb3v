import React from 'react'

const ProfilePage: React.FC = () => {
  // Mock user data (replace with actual user data)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Job Seeker',
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <strong className="block text-gray-700">Name:</strong>
          <span>{user.name}</span>
        </div>
        <div className="mb-4">
          <strong className="block text-gray-700">Email:</strong>
          <span>{user.email}</span>
        </div>
        <div className="mb-4">
          <strong className="block text-gray-700">Role:</strong>
          <span>{user.role}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default ProfilePage