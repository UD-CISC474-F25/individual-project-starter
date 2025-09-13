'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './dashboard.css'

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('courses')

  // Mock data for demonstration
  const courses = [
    {
      id: 1,
      name: 'Introduction to Programming',
      code: 'CISC 108',
      instructor: 'Dr. Smith',
      progress: 85,
      assignments: 3,
      announcements: 2,
      nextDeadline: 'Assignment 4 - Oct 15, 2024'
    },
    {
      id: 2,
      name: 'Data Structures',
      code: 'CISC 220',
      instructor: 'Prof. Johnson',
      progress: 72,
      assignments: 5,
      announcements: 1,
      nextDeadline: 'Project 2 - Oct 20, 2024'
    },
    {
      id: 3,
      name: 'Web Techchnologies',
      code: 'CISC 474',
      instructor: 'DR. Bart',
      progress: 90,
      assignments: 2,
      announcements: 0,
      nextDeadline: 'Final Project - Dec 1, 2025'
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'CISC 437',
      instructor: 'Prof. Gibbons',
      progress: 78,
      assignments: 4,
      announcements: 3,
      nextDeadline: 'Exam - Sept 30, 2025'
    },
    {
      id: 5,
      name: 'Senior Design',
      code: 'CISC 498',
      instructor: 'Proffessor Armando',
      progress: 65,
      assignments: 6,
      announcements: 1,
      nextDeadline: 'Team Project - Oct 25, 2025'
    }
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation Header */}
      <header className="dashboard-header">
        <div className="header-content">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">C</div>
            <span className="logo-text">Codify</span>
          </Link>

          {/* Navigation Tabs */}
          <nav className="nav-tabs">
            <button 
              className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              📚 Courses
            </button>
            <button 
              className={`nav-tab ${activeTab === 'assignments' ? 'active' : ''}`}
              onClick={() => setActiveTab('assignments')}
            >
              📝 Assignments
            </button>
            <button 
              className={`nav-tab ${activeTab === 'schedule' ? 'active' : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              📅 Schedule
            </button>
            <button 
              className={`nav-tab ${activeTab === 'announcements' ? 'active' : ''}`}
              onClick={() => setActiveTab('announcements')}
            >
              📢 Announcements
            </button>
          </nav>

          {/* User Profile & Controls */}
          <div className="header-controls">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="user-profile">
              <div className="user-avatar">👤</div>
              <span className="user-name">Nazmul Hossain</span>
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}

export default StudentDashboard