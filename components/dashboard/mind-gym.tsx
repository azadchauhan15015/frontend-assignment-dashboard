'use client'

import { Clock, Heart, Wind, Zap, Dumbbell, Brain } from 'lucide-react'

export function MindGym() {
  const exercises = [
    {
      icon: Wind,
      title: 'Breathing Exercises',
      subtitle: 'Calm and relax',
      time: '3-5 minutes',
      gradient: 'bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: Zap,
      title: 'Focus Exercises',
      subtitle: 'Boost concentration',
      time: '5-10 minutes',
      gradient: 'bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Dumbbell,
      title: 'Muscle Relaxation',
      subtitle: 'Release body tension',
      time: '25-30 minutes',
      gradient: 'bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50',
      iconColor: 'text-purple-500',
    },
    {
      icon: Brain,
      title: 'Study Focus Reset',
      subtitle: 'Sharpen your mind',
      time: '3 minutes',
      gradient: 'bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50',
      iconColor: 'text-pink-500',
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
          <Heart className="w-5 h-5 text-yellow-500" />
        </div>
        <h3 className="font-semibold text-gray-900 text-lg">Mind Gym</h3>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Suggests mindfulness and focus activities to keep your mind sharp and calm.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exercises.map((exercise, index) => {
          const Icon = exercise.icon

          return (
            <div
              key={index}
              className={`${exercise.gradient} rounded-xl p-5 flex flex-col justify-between min-h-45`}
            >
              
              {/* Top */}
              <div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm mb-3">
                  <Icon className={`w-5 h-5 ${exercise.iconColor}`} />
                </div>

                <p className="font-semibold text-gray-900 text-base mb-1">
                  {exercise.title}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  {exercise.subtitle}
                </p>
              </div>

              {/* Bottom Card */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between">
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {exercise.time}
                </div>

                <button className="bg-white px-4 py-1.5 rounded-full text-sm font-medium text-gray-800 hover:shadow transition-all">
                  Start →
                </button>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}