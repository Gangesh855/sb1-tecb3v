import React from 'react'
import { Briefcase, FileText, Bell, Settings } from 'lucide-react'

const DashboardPage: React.FC = () => {
  // Mock user data (replace with actual user data from your authentication system)
  const user = {
    name: 'John Doe',
    role: 'Job Seeker',
    appliedJobs: 5,
    savedJobs: 3,
    newNotifications: 2
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Applied Jobs"
          value={user.appliedJobs}
          icon={<Briefcase size={24} />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Saved Jobs"
          value={user.savedJobs}
          icon={<FileText size={24} />}
          color="bg-green-500"
        />
        <DashboardCard
          title="New Notifications"
          value={user.newNotifications}
          icon={<Bell size={24} />}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Account Settings"
          value="Manage"
          icon={<Settings size={24} />}
          color="bg-purple-500"
          isLink
        />
      </div>
      {/* Add more dashboard content here */}
    </div>
  )
}

interface DashboardCardProps {
  title: string
  value: number | string
  icon: React.ReactNode
  color: string
  isLink?: boolean
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, color, isLink }) => {
  return (
    <div className={`${color} text-white rounded-lg shadow-md p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-white">{icon}</div>
      </div>
      {isLink && (
        <button className="mt-2 text-sm underline">View Details</button>
      )}
    </div>
  )
}

export default DashboardPage