'use client'

import {
  LayoutDashboard,
  Map,
  MessageSquare,
  Heart,
  Users,
  Sparkles,
  CreditCard,
  Settings,
  LogOut,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { id: 'roadmap', label: 'Career Roadmap', icon: Map, href: '/roadmap' },
  { id: 'session', label: 'Session', icon: MessageSquare, href: '/session' },
  { id: 'wellness', label: 'Mental Wellness', icon: Heart, href: '/wellness' },
  { id: 'marketplace', label: 'Consultant Marketplace', icon: Users, href: '/marketplace' },
  { id: 'ai', label: 'ConsulITOpen AI', icon: Sparkles, href: '/ai' },
]

const bottomItems = [
  { id: 'subscription', label: 'Subscription', icon: CreditCard, href: '/subscription' },
  { id: 'wallet', label: 'Wallet & Payments', icon: CreditCard, href: '/wallet' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  { id: 'logout', label: 'Logout', icon: LogOut, href: '/logout' },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-60 bg-white border-r border-gray-200 flex flex-col overflow-hidden transform transition-transform duration-200 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Image
              src="/logo/Header.png"
              alt="ConsulTOpen Logo"
              width={160}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
                    isActive
                      ? 'bg-teal-500 text-white '
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-gray-500'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Bottom Items */}
        <div className="border-t border-gray-200 px-4 py-4 space-y-1">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm ${
                  isActive
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-gray-500'}`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
              AM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Alex Miller</p>
              <p className="text-xs text-teal-600 font-semibold">ELITE</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="text-lg">⋮</span>
            </button>
          </div>
        </div>

      </aside>
    </>
  )
}
