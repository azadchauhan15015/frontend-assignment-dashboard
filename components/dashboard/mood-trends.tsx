import { Heart,Activity } from 'lucide-react'
import Image from 'next/image'

export function MoodTrends() {
  const days = [
    { day: 'Mon', src: '/mood-trends/Group.png', value: 120, gradient: 'from-purple-300 to-purple-600' },
    { day: 'Tue', src: '/mood-trends/Group.png', value: 120, gradient: 'from-lime-300 to-lime-600' },
    { day: 'Wed', src: '/mood-trends/Group.png', value: 120, gradient: 'from-pink-300 to-pink-600' },
    { day: 'Thu', src: '/mood-trends/Group.png', value: 120, gradient: 'from-cyan-300 to-cyan-600' },
    { day: 'Fri', src: '/mood-trends/Group.png', value: 120, gradient: 'from-red-300 to-red-600' },
    { day: 'Sat', src: '/mood-trends/Group.png', value: 120, gradient: 'from-gray-200 to-gray-300' },
    { day: 'Sun', src: '/mood-trends/Group.png', value: 120, gradient: 'from-gray-100 to-gray-200' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-300 p-4 sm:p-6 lg:p-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
        <h3 className="font-semibold text-gray-900 text-lg sm:text-xl flex items-center gap-2 sm:gap-3">
          <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-pink-500 shrink-0" />
          <span>Mood & Activity Trends</span>
        </h3>
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-xs sm:text-sm font-medium hover:bg-gray-50 whitespace-nowrap">
          This Week
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        Emotional wellbeing & platform engagement<br />
        based on your daily check-ins.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Chart Section */}
      <div className="flex items-end justify-center gap-2 sm:gap-3 lg:gap-1 h-48 sm:h-64 lg:h-80 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0">
        {days.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-fit sm:min-w-0">
            {/* Emoji Avatar */}
            <Image
              src={item.src}
            
              alt={item.day}
              width={90}
              height={90}
            className="w-8 h-8 sm:w-8 sm:h-8 lg:w-8 lg:h-8"
            />

            {/* Gradient Bar */}
            <div
              className={`w-4 sm:w-5 lg:w-8 min-h-14 sm:min-h-20 lg:min-h-24 max-h-28 sm:max-h-40 lg:max-h-56 [height:calc(var(--bar-value)*0.6px)] sm:[height:calc(var(--bar-value)*0.9px)] lg:[height:calc(var(--bar-value)*1.3px)] bg-linear-to-t ${item.gradient} rounded-lg transition-all duration-200 hover:shadow-md`}
              style={{
                ['--bar-value' as string]: item.value,
              }}
            />

            {/* Day Label */}
            <span className="text-gray-500 text-xs sm:text-sm font-medium">{item.day}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-4 sm:mb-6" />

      {/* Alert Section */}
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="text-xl sm:text-2xl mt-0.5 shrink-0">⚠️</span>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Your mood this week suggests increased
          stress related to your future.
        </p>
      </div>
    </div>
  )
}
