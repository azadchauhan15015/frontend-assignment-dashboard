'use client'

import { Search, Bell, MessageCircle, Menu } from 'lucide-react'

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 min-h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 lg:px-8 gap-3 sm:gap-4">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="flex-1 min-w-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search internships, certifications, consultants..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 shrink-0">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
          <MessageCircle className="w-5 h-5" />
        </button>
        <button className="hidden sm:inline-flex ml-1 sm:ml-2 px-3 lg:px-4 py-2 bg-gray-900 text-white rounded-lg text-xs lg:text-sm font-medium hover:bg-gray-800 transition-colors">
          Upgrade Plan
        </button>
      </div>
    </nav>
  )
}
