import React, { useState } from 'react';
import { BarChart3, Calendar, MessageCircle, Settings, LogOut, TrendingUp, Clock, Award } from 'lucide-react';
import type { User } from '../App';

interface ParentDashboardProps {
  user: User;
  onLogout: () => void;
}

export function ParentDashboard({ user, onLogout }: ParentDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const children = [
    {
      id: '1',
      name: 'KampungCoder123',
      age: 8,
      progress: 75,
      level: 5,
      badges: 12,
      lastActive: '2024-01-15',
      weeklyTime: 8.5
    },
    {
      id: '2',
      name: 'MalaysiaCoder456',
      age: 10,
      progress: 60,
      level: 4,
      badges: 8,
      lastActive: '2024-01-14',
      weeklyTime: 6.2
    }
  ];

  const upcomingClasses = [
    {
      id: '1',
      title: 'Scratch Basics - Pasar Malam Game',
      date: '2024-01-16',
      time: '14:00',
      teacher: 'Cikgu Rahman',
      child: 'KampungCoder123'
    },
    {
      id: '2',
      title: 'Python Introduction - Festival Coding',
      date: '2024-01-17',
      time: '15:30',
      teacher: 'Cikgu Siti',
      child: 'MalaysiaCoder456'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏘️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">CodeKampung</h1>
                <p className="text-sm text-gray-600">Parent Dashboard - {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'progress', name: 'Child Progress', icon: TrendingUp },
              { id: 'schedule', name: 'Class Schedule', icon: Calendar },
              { id: 'messages', name: 'Messages', icon: MessageCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Children</p>
                    <p className="text-2xl font-bold text-gray-800">{children.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👶</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Classes This Week</p>
                    <p className="text-2xl font-bold text-gray-800">8</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Learning Time</p>
                    <p className="text-2xl font-bold text-gray-800">14.7 hours</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Badges Earned</p>
                    <p className="text-2xl font-bold text-gray-800">20</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Children Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Children's Progress</h3>
                {children.map((child) => (
                  <div key={child.id} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {child.name.slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{child.name}</h4>
                          <p className="text-sm text-gray-600">Age: {child.age} years</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Level {child.level}</p>
                        <p className="text-xs text-gray-500">{child.badges} lencana</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Overall Progress</span>
                          <span className="font-medium">{child.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${child.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">This week: {child.weeklyTime} hours</span>
                        <span className="text-gray-600">Active: {child.lastActive}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming Classes */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Classes</h3>
                <div className="space-y-4">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{classItem.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">Teacher: {classItem.teacher}</p>
                          <p className="text-sm text-blue-600 font-medium">Child: {classItem.child}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">{classItem.date}</p>
                          <p className="text-sm text-gray-600">{classItem.time}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Detailed Progress Report</h2>
            
            {children.map((child) => (
              <div key={child.id} className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {child.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{child.name}</h3>
                    <p className="text-gray-600">Monthly Progress Report</p>
                  </div>
                </div>

                {/* Progress Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-200"></div>
                      <div 
                        className="absolute top-0 left-0 w-24 h-24 rounded-full border-8 border-green-500 transform -rotate-90"
                        style={{ 
                          background: `conic-gradient(#10B981 ${child.progress * 3.6}deg, transparent 0deg)`
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-800">{child.progress}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Kemajuan Keseluruhan</p>
                    <p className="text-sm text-gray-600">Overall Progress</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{child.level}</div>
                    <p className="text-sm text-gray-600">Current Level</p>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">65% ke Level {child.level + 1}</p>
                      <p className="text-xs text-gray-500 mt-1">65% to Level {child.level + 1}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{child.badges}</div>
                    <p className="text-sm text-gray-600">Badges Earned</p>
                    <p className="text-xs text-gray-500 mt-1">+3 last week</p>
                  </div>
                </div>

                {/* Weekly Activity */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Weekly Activity</h4>
                  <div className="flex items-end space-x-2 h-32">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                      const height = Math.random() * 80 + 20; // Demo data
                      return (
                        <div key={day} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-md mb-2"
                            style={{ height: `${height}%` }}
                          ></div>
                          <span className="text-xs text-gray-600">{day.slice(0, 3)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Masa belajar (minit) sepanjang minggu</p>
                  <p className="text-sm text-gray-600 mt-2">Learning time (minutes) throughout the week</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Class Schedule</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book New Class
              </button>
            </div>

            {/* Calendar View */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="grid grid-cols-7 gap-4 mb-6">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-medium text-gray-700 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i + 1;
                  const hasClass = [3, 5, 10, 12, 17, 19, 24, 26].includes(day);
                  return (
                    <div 
                      key={i} 
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                        hasClass 
                          ? 'bg-orange-100 text-orange-700 font-medium border border-orange-300' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {day <= 31 ? day : ''}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Classes List */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Next 7 Days Classes</h3>
              <div className="space-y-4">
                {upcomingClasses.map((classItem) => (
                  <div key={classItem.id} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{classItem.title}</h4>
                          <p className="text-sm text-gray-600">
                            {classItem.date} at {classItem.time} | {classItem.teacher}
                          </p>
                          <p className="text-sm text-blue-600">For: {classItem.child}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Communication with Teachers</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No New Messages</h3>
                <p className="text-gray-500">All communication with teachers will be displayed here</p>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}