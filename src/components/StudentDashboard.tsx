import React, { useState } from 'react';
import { Play, Trophy, Star, MapPin, Users, LogOut, Home, Book } from 'lucide-react';
import type { User } from '../App';

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
}

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: '1',
      title: 'Virtual Night Market',
      description: 'Learn loops by selling food at the night market',
      difficulty: 'Easy',
      progress: 80,
      thumbnail: '🏮',
      unlocked: true
    },
    {
      id: '2',
      title: 'Hari Raya Ketupat',
      description: 'Create ketupat patterns using functions',
      difficulty: 'Medium',
      progress: 45,
      thumbnail: '🎆',
      unlocked: true
    },
    {
      id: '3',
      title: 'Penang Street Art',
      description: 'Draw street art with coding',
      difficulty: 'Challenging',
      progress: 0,
      thumbnail: '🎨',
      unlocked: false
    }
  ];

  const badges = [
    { name: 'Kampung Coder', icon: '🏘️', earned: true },
    { name: 'Festival Master', icon: '🎊', earned: true },
    { name: 'Art Creator', icon: '🎨', earned: false },
    { name: 'Python Explorer', icon: '🐍', earned: false }
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
                <p className="text-sm text-gray-600">Welcome, {user.name}!</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold mb-2">Let's Learn to Code! 🚀</h2>
                <p className="text-blue-100 mb-4">Continue your coding journey today</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">Level 5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">2 Badges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Lessons</h3>
              <div className="grid gap-6">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`bg-white rounded-xl p-6 shadow-lg border transition-all duration-200 ${
                      lesson.unlocked 
                        ? 'hover:shadow-xl cursor-pointer border-orange-200' 
                        : 'opacity-60 border-gray-200'
                    }`}
                    onClick={() => lesson.unlocked && setSelectedLesson(lesson.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{lesson.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-800">{lesson.title}</h4>
                          <div className="flex items-center space-x-2">
                            {lesson.unlocked ? (
                              <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition-colors">
                                <Play className="w-4 h-4 inline mr-1" />
                                Play
                              </button>
                            ) : (
                              <span className="bg-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                                Locked
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{lesson.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            lesson.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            lesson.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {lesson.difficulty}
                          </span>
                          {lesson.unlocked && (
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${lesson.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">{lesson.progress}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Lessons Completed</span>
                    <span className="font-medium">5/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Learning Time</span>
                    <span className="font-medium">12 hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Daily Streak</span>
                    <span className="font-medium">7 days</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Badges</h4>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`text-center p-3 rounded-lg transition-all duration-200 ${
                      badge.earned 
                        ? 'bg-yellow-50 border-2 border-yellow-200 hover:shadow-md' 
                        : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <p className="text-xs font-medium text-gray-700">{badge.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Home className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">Virtual Village</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Live Classes</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <Book className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-medium">Library</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}