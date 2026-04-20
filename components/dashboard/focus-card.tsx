'use client'

import { Circle,Target, CheckCircle2, Clock,ArrowRight,ArrowRightCircle } from 'lucide-react'

export function FocusCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-[#EC4899]" />
        <h3 className="font-bold text-gray-900 text-base">Today&apos;s Focus!</h3>
      </div>

      {/* Content Card */}
      <div className="rounded-lg p-6 border boredr-gray-200">
        <h4 className="font-bold text-gray-900 text-lg mb-5">Study Motion and Energy Concepts</h4>
        
        {/* Checklist Items */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ArrowRightCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-800">Understand speed, velocity, and acceleration</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-800">Solve 5-10 basic numerical problems</p>
          </div>
        </div>
      </div>
    </div>
  )
}
