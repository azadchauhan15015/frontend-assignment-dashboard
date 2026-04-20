'use client'

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
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-60 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Greeting */}
            <Greeting />

            {/* AI Section */}
            <AISection />

            {/* Top Cards Grid */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7 md:col-span-8 sm:col-span-12">
                <FocusCard />
              </div>
              <div className="col-span-5 md:col-span-4 sm:col-span-12">
                <WellnessCard />
              </div>
            </div>

            {/* Career Roadmap */}
            <RoadmapSection />

            {/* Two Column Layout: Build Basics + Mood/Recommended/Skills */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Build Basics + Mind Gym */}
              <div className="col-span-6 lg:col-span-8 md:col-span-12">
                <div className="space-y-6">
                  <BuildBasics />
                  <MindGym />
                </div>
              </div>

              {/* Right Column - Mood Trends + Recommended + Skills */}
              <div className="col-span-6 lg:col-span-4 md:col-span-12">
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
