'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Navbar } from '@/components/dashboard/navbar'
import { Greeting } from '@/components/dashboard/greeting'
import { AISection } from '@/components/dashboard/ai-section'
import { FocusCard } from '@/components/dashboard/focus-card'
import { WellnessCard } from '@/components/dashboard/wellness-card'
import { RoadmapSection } from '@/components/dashboard/roadmap-section'
import { BuildBasics } from '@/components/dashboard/build-basics'
import { MoodTrends } from '@/components/dashboard/mood-trends'
import { Recommended } from '@/components/dashboard/recommended'
import { SkillsProgress } from '@/components/dashboard/skills-progress'
import { MindGym } from '@/components/dashboard/mind-gym'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 md:ml-60 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(prev => !prev)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Greeting */}
            <Greeting />

            {/* AI Section */}
            <AISection />

            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              <div className="lg:col-span-7">
                <FocusCard />
              </div>
              <div className="lg:col-span-5">
                <WellnessCard />
              </div>
            </div>

            {/* Career Roadmap */}
            <RoadmapSection />

            {/* Two Column Layout: Build Basics + Mood/Recommended/Skills */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
              {/* Left Column - Build Basics + Mind Gym */}
              <div className="xl:col-span-8">
                <div className="space-y-6">
                  <BuildBasics />
                  <MindGym />
                </div>
              </div>

              {/* Right Column - Mood Trends + Recommended + Skills */}
              <div className="xl:col-span-4">
                <div className="space-y-2">
                  <MoodTrends />
                  <Recommended />
                  <SkillsProgress />
                </div>
              </div>
            </div>

            {/* Bottom Padding */}
            <div className="h-4" />
          </div>
        </main>
      </div>
    </div>
  )
}
