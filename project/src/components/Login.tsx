import React, { useState } from 'react';
import { User, Book, Shield, Users } from 'lucide-react';
import type { User as UserType } from '../App';

interface LoginProps {
  onLogin: (user: UserType) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [selectedRole, setSelectedRole] = useState<string>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const roles = [
    { id: 'student', name: 'Student', icon: Book, color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'parent', name: 'Parent', icon: Users, color: 'bg-green-500 hover:bg-green-600' },
    { id: 'teacher', name: 'Teacher', icon: User, color: 'bg-purple-500 hover:bg-purple-600' },
    { id: 'admin', name: 'Admin', icon: Shield, color: 'bg-red-500 hover:bg-red-600' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo login - in real app, this would authenticate with backend
    const demoUsers: Record<string, UserType> = {
      student: {
        id: 'student1',
        name: 'KampungCoder123',
        role: 'student',
        email: 'student@demo.com',
        avatar: '🧑‍💻'
      },
      parent: {
        id: 'parent1',
        name: 'Mrs. Aminah',
        role: 'parent',
        email: 'parent@demo.com',
        avatar: '👩‍👧‍👦'
      },
      teacher: {
        id: 'teacher1',
        name: 'Teacher Rahman',
        role: 'teacher',
        email: 'teacher@demo.com',
        avatar: '👨‍🏫'
      },
      admin: {
        id: 'admin1',
        name: 'Mr. Hassan',
        role: 'admin',
        email: 'admin@demo.com',
        avatar: '👨‍💼'
      }
    };

    onLogin(demoUsers[selectedRole] as UserType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="fill-current text-orange-800">
          <pattern id="batik" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="3" />
            <path d="M2,2 Q10,8 18,2 Q10,12 2,18 Q10,12 18,18 Q10,8 2,2" strokeWidth="0.5" stroke="currentColor" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#batik)" />
        </svg>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏘️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">CodeKampung</h1>
              <p className="text-sm text-gray-600">Online Coding Academy</p>
            </div>
          </div>
          <p className="text-gray-600">Coding learning platform for Malaysian children</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Role</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedRole === role.id
                          ? 'border-orange-400 bg-orange-50 shadow-md'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${
                        selectedRole === role.id ? 'text-orange-600' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        selectedRole === role.id ? 'text-orange-700' : 'text-gray-600'
                      }`}>
                        {role.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium mb-2">🎮 Demo Platform</p>
            <p className="text-xs text-blue-600">
              Select any role and click "Login" to try the platform. 
              Any email and password can be used for this demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}