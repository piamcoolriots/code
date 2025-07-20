import React, { useState } from 'react';
import { Users, Video, BookOpen, Calendar, MessageCircle, LogOut, Clock, Award, Play } from 'lucide-react';
import type { User } from '../App';

interface TeacherDashboardProps {
  user: User;
  onLogout: () => void;
}

export function TeacherDashboard({ user, onLogout }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState('classes');

  const classes = [
    {
      id: '1',
      title: 'Scratch Basics - Night Market Game',
      students: 8,
      date: '2024-01-16',
      time: '14:00',
      duration: '60 min',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Python Introduction - Festival Coding',
      students: 6,
      date: '2024-01-16',
      time: '15:30',
      duration: '90 min',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Blockly Adventures - Hari Raya Quest',
      students: 10,
      date: '2024-01-15',
      time: '16:00',
      duration: '60 min',
      status: 'completed'
    }
  ];

  const students = [
    {
      id: '1',
      name: 'KampungCoder123',
      age: 8,
      progress: 75,
      lastSeen: '2024-01-15',
      badges: 12,
      level: 5
    },
    {
      id: '2',
      name: 'MalaysiaCoder456',
      age: 10,
      progress: 60,
      lastSeen: '2024-01-14',
      badges: 8,
      level: 4
    },
    {
      id: '3',
      name: 'JungleCoder789',
      age: 9,
      progress: 85,
      lastSeen: '2024-01-15',
      badges: 15,
      level: 6
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
                <p className="text-sm text-gray-600">Teacher Dashboard - {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-800">24</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Classes Today</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Teaching Hours</p>
                <p className="text-2xl font-bold text-gray-800">42.5</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-800">4.8</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'classes', name: 'My Classes', icon: Calendar },
              { id: 'students', name: 'Students', icon: Users },
              { id: 'content', name: 'Content', icon: BookOpen },
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

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">My Classes</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Create New Class
              </button>
            </div>

            <div className="grid gap-6">
              {classes.map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        classItem.status === 'upcoming' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {classItem.status === 'upcoming' ? (
                          <Video className="w-6 h-6 text-blue-600" />
                        ) : (
                          <Play className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{classItem.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{classItem.date} at {classItem.time}</span>
                          <span>•</span>
                          <span>{classItem.duration}</span>
                          <span>•</span>
                          <span>{classItem.students} students</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        classItem.status === 'upcoming' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {classItem.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                      {classItem.status === 'upcoming' && (
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                          Start Class
                        </button>
                      )}
                      {classItem.status === 'completed' && (
                        <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          View Record
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">My Students</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student) => (
                <div key={student.id} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {student.name.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-600">Age: {student.age} years</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-gray-600">Level: </span>
                        <span className="font-medium">{student.level}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Badges: </span>
                        <span className="font-medium">{student.badges}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      Active: {student.lastSeen}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full text-center text-orange-600 hover:text-orange-700 font-medium text-sm">
                      View Full Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Lesson Content</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Add Content
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Night Market Game', type: 'Scratch', students: 24, status: 'active' },
                { title: 'Hari Raya Quest', type: 'Blockly', students: 18, status: 'active' },
                { title: 'Festival Coding', type: 'Python', students: 12, status: 'draft' },
                { title: 'Village Adventure', type: 'Scratch', students: 20, status: 'active' }
              ].map((content, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{content.title}</h3>
                      <p className="text-sm text-gray-600">{content.type}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      content.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {content.status === 'active' ? 'Active' : 'Draft'}
                    </span>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    {content.students} students using
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gray-300 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Edit
                    </button>
                    <button className="flex-1 bg-orange-500 text-white py-2 px-3 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Communication</h2>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No New Messages</h3>
                <p className="text-gray-500">All communication with parents will be displayed here</p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium mb-2">🛡️ Safety Guidelines</p>
                  <p className="text-xs text-blue-600">
                    All communication must go through this platform. Do not share personal information 
                    or attempt to contact outside the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}