'use client'
import { TestTube,Calculator } from 'lucide-react'

export function SkillsProgress() {
  const skills = [
    { icon: <Calculator />, name: 'Math Problem Solving', progress: 80, iconBg: 'bg-purple-100' },
    { icon: <TestTube />, name: 'Science Experiments', progress: 70, iconBg: 'bg-red-100' },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">⚡</span>
        <h3 className="font-bold text-gray-900">Skills Progress</h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`${skill.iconBg} p-2 rounded-lg`}>
                {skill.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{skill.name}</p>
              </div>
              <span className="text-sm font-bold text-gray-900">{skill.progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
