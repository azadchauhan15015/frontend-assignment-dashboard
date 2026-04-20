'use client'

import { ChevronDown, Lock, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export function BuildBasics() {
  const [expanded, setExpanded] = useState(true)

  const lockedItems = [
    { title: 'Course Title', locked: true },
    { title: 'Rotation Magnetism In Periodic Table', locked: true },
  ]

  const items = [
    { title: 'Study Motion and Energy Concepts', subject: 'Science', completed: false },
    { title: 'Solve 20 Maths Question Daily', subject: 'Maths', completed: true },
    { title: 'Watch a Science Concept Video', subject: 'Exploration', completed: true },
    { title: 'Follow a Weekly Study Plan', subject: 'Habit', completed: true },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-200"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-5 h-5 rounded border-2 border-gray-300 cursor-pointer"
          />
          <h3 className="font-bold text-gray-900">Build Basics</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ml-auto ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {expanded && (
        <div className="divide-y divide-gray-200">
          
          {/* Locked Items */}
          {lockedItems.map((item, index) => (
            <div
              key={`locked-${index}`}
              className="p-4 flex items-center gap-3 bg-gray-50 blur-[2px] opacity-60 pointer-events-none"
            >
              <div className="w-6 h-6 rounded bg-gray-200"></div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>

              <Lock className="w-5 h-5 text-gray-400 shrink-0" />

              <div className="w-8 h-5 bg-gray-200 rounded-full shrink-0"></div>
            </div>
          ))}

          {/* Task Items */}
          {items.map((item, index) => (
            <div key={index} className="p-4 flex items-start gap-3">
              
              {/* Checkbox / Completed Icon */}
              <div className="shrink-0 mt-0.5">
                {item.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                ) : (
                  <div className="w-5 h-5 rounded border-2 border-gray-300"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    item.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </p>

                <span
                  className={`inline-block text-xs font-medium mt-1 ${
                    item.subject === 'Science'
                      ? 'text-red-600'
                      : item.subject === 'Maths'
                      ? 'text-green-600'
                      : item.subject === 'Exploration'
                      ? 'text-teal-600'
                      : 'text-purple-600'
                  }`}
                >
                  {item.subject}
                </span>
              </div>

              {/* Continue Button (only if NOT completed) */}
              {!item.completed && (
                <button className="text-teal-600 hover:text-teal-700 text-sm font-medium shrink-0">
                  Continue
                </button>
              )}
            </div>
          ))}

        </div>
      )}
    </div>
  )
}