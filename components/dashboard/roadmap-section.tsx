import { CheckCircle2, Lock,Target } from 'lucide-react'

const milestones = [
  { label: 'Build Basics', completed: true, locked: false },
  { label: 'Strengthen Concepts', completed: false, locked: true },
  { label: 'Score in Boards', completed: false, locked: true },
  { label: 'PCM Stream', completed: false, locked: true },
]

const NEXT_PROGRESS = 65
const CIRCLE_RADIUS = 24

function getProgressWidth(): string {
  const completedSegments = milestones.filter(m => m.completed).length - 1
  const totalSegments = milestones.length - 1
  const segmentFraction = (completedSegments + NEXT_PROGRESS / 100) / totalSegments
  return `calc(${segmentFraction * 100}% + ${CIRCLE_RADIUS}px)`
}

export function RoadmapSection() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
          <span className="text-teal-600">≡</span> Career Roadmap
        </h3>
        <a href="#" className="text-teal-600 text-sm font-medium hover:text-teal-700">
          View Full Roadmap
        </a>
      </div>

      <div className="relative mb-8">
        {/* Gray base line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300" />

        {/* Teal progress line — starts from left edge, extends past first circle */}
        <div
          className="absolute top-6 left-0 h-0.5 bg-teal-500 transition-all duration-500"
          style={{ width: getProgressWidth() }}
        />

        <div className="flex items-start justify-between relative z-10">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3">
                {milestone.completed ? (
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
              <span
                className={`text-sm font-medium text-center whitespace-nowrap ${
                  milestone.completed ? 'text-gray-900 font-bold' : 'text-gray-500'
                }`}
              >
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-teal-500" />
            </div>
            <span className="font-semibold text-teal-700">Next Milestone: Strengthen Concepts</span>
          </div>
          <span className="font-bold text-teal-600 text-lg">{NEXT_PROGRESS}%</span>
        </div>
      </div>
    </div>
  )
}
