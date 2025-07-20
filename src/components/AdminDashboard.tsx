import React, { useState } from 'react';
import { Users, BookOpen, Shield, TrendingUp, Calendar, Settings, LogOut, UserCheck, AlertTriangle } from 'lucide-react';
import type { User } from '../App';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 1247,
    activeStudents: 892,
    teachers: 24,
    parents: 438,
    totalClasses: 156,
    revenue: 'RM 89,340'
  };

  const recentActivity = [
    {
      id: '1',
      type: 'user_registration',
      description: 'Pelajar baru mendaftar: KampungCoder999',
      timestamp: '5 minit yang lalu',
      severity: 'info'
    },
    {
      id: '2',
      type: 'security_alert',
      description: 'Cubaan log masuk yang mencurigakan dikesan',
      timestamp: '1 jam yang lalu',
      severity: 'warning'
    },
    {
      id: '3',
      type: 'payment',
      description: 'Pembayaran langganan Premium diterima',
      timestamp: '2 jam yang lalu',
      severity: 'success'
    }
  ];

  const teachers = [
    {
      id: '1',
      name: 'Cikgu Rahman',
      email: 'rahman@codekampung.com',
      students: 24,
      rating: 4.8,
      status: 'active',
      lastActive: '2024-01-15'
    },
    {
      id: '2',
      name: 'Cikgu Siti',
      email: 'siti@codekampung.com',
      students: 18,
      rating: 4.9,
      status: 'active',
      lastActive: '2024-01-15'
    },
    {
      id: '3',
      name: 'Cikgu Ahmad',
      email: 'ahmad@codekampung.com',
      students: 20,
      rating: 4.7,
      status: 'pending',
      lastActive: '2024-01-14'
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
                <h1 className="text-xl font-bold text-gray-800">CodeKampung Admin</h1>
                <p className="text-sm text-gray-600">Dashboard Pentadbiran - {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Jumlah Pengguna</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pelajar Aktif</p>
                <p className="text-2xl font-bold text-gray-800">{stats.activeStudents}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Guru</p>
                <p className="text-2xl font-bold text-gray-800">{stats.teachers}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ibu Bapa</p>
                <p className="text-2xl font-bold text-gray-800">{stats.parents}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kelas Bulan Ini</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalClasses}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pendapatan</p>
                <p className="text-2xl font-bold text-gray-800">{stats.revenue}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Gambaran Keseluruhan', icon: TrendingUp },
              { id: 'users', name: 'Pengurusan Pengguna', icon: Users },
              { id: 'security', name: 'Keselamatan', icon: Shield },
              { id: 'content', name: 'Kandungan', icon: BookOpen },
              { id: 'settings', name: 'Tetapan', icon: Settings }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Aktiviti Terkini</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.severity === 'warning' ? 'bg-yellow-500' :
                        activity.severity === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{activity.description}</p>
                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Aksi Pantas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Tambah Pengguna</p>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <BookOpen className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Audit Kandungan</p>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                      <Shield className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Laporan Keselamatan</p>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                      <Settings className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800">Tetapan Sistem</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Platform Analytics */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Analitis Platform</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">87.3%</div>
                  <p className="text-sm text-gray-600">Kadar Kepuasan Pengguna</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">94.2%</div>
                  <p className="text-sm text-gray-600">Uptime Platform</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">12.5 min</div>
                  <p className="text-sm text-gray-600">Purata Masa Sesi</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Pengurusan Pengguna</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Tambah Pengguna
              </button>
            </div>

            {/* Teachers Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Pengurusan Guru</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Nama</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Pelajar</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher) => (
                      <tr key={teacher.id} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-blue-600">
                                {teacher.name.split(' ')[1]?.charAt(0) || 'G'}
                              </span>
                            </div>
                            <span className="font-medium text-gray-800">{teacher.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{teacher.email}</td>
                        <td className="py-3 px-4 text-gray-600">{teacher.students}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-gray-600">{teacher.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            teacher.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {teacher.status === 'active' ? 'Aktif' : 'Menunggu'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-700 text-sm">Hapus</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Pemantauan Keselamatan</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Alert Keselamatan</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Cubaan akses tidak sah</p>
                      <p className="text-xs text-red-600">IP: 192.168.1.100 - 2 jam yang lalu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Aktiviti mencurigakan dikesan</p>
                      <p className="text-xs text-yellow-600">Pengguna: teacher_001 - 4 jam yang lalu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Audit Log</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {[
                    'Login: admin@codekampung.com - 10:30 AM',
                    'User created: student_new_001 - 10:25 AM', 
                    'Content approved: Pasar Malam Game - 10:20 AM',
                    'Teacher verified: cikgu.rahman - 10:15 AM',
                    'Payment processed: RM150 - 10:10 AM'
                  ].map((log, index) => (
                    <div key={index} className="text-sm text-gray-600 py-1 border-b border-gray-100">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Tetapan Keselamatan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Audit Komunikasi</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Aktif</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Auto Block Suspicious IPs</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Aktif</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Content Filtering</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Aktif</button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Session Timeout</span>
                    <span className="text-gray-600">30 minit</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">MFA untuk Guru</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Aktif</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Data Encryption</span>
                    <span className="text-green-600">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Pengurusan Kandungan</h2>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Tambah Modul
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Modul Pembelajaran</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Pasar Malam Virtual', type: 'Scratch', status: 'approved', students: 120 },
                  { title: 'Hari Raya Quest', type: 'Blockly', status: 'approved', students: 89 },
                  { title: 'Penang Street Art', type: 'Python', status: 'pending', students: 0 },
                  { title: 'Kampung Adventure', type: 'Scratch', status: 'approved', students: 156 },
                  { title: 'Festival Coding', type: 'Python', status: 'draft', students: 0 },
                  { title: 'Malaysian Heritage', type: 'Blockly', status: 'review', students: 0 }
                ].map((module, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-gray-800">{module.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        module.status === 'approved' ? 'bg-green-100 text-green-700' :
                        module.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        module.status === 'review' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {module.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{module.type}</p>
                    <p className="text-sm text-gray-600 mb-3">{module.students} pelajar</p>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Approve</button>
                      <button className="text-red-600 hover:text-red-700 text-sm">Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Tetapan Sistem</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Tetapan Umum</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Platform</label>
                    <input 
                      type="text" 
                      defaultValue="CodeKampung"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Admin</label>
                    <input 
                      type="email" 
                      defaultValue="admin@codekampung.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bahasa Default</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>Bahasa Malaysia</option>
                      <option>English</option>
                      <option>中文</option>
                      <option>தமிழ்</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Tetapan Pembayaran</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mata Wang</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>MYR (RM)</option>
                      <option>USD ($)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gateway Pembayaran</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        <span className="text-sm">Stripe</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        <span className="text-sm">iPay88</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">PayPal</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Simpan Tetapan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}