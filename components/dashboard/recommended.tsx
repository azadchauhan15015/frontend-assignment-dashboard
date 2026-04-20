'use client'

import { Star,User } from 'lucide-react'
import Image from 'next/image'

export function Recommended() {
  const consultant = {
    name: 'Mukund Tyagi',
    role: 'Student Wellbeing Therapist',
    rating: 4.9,
    sessions: 120,
    image: '/user.png',
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
      
      {/* Top Badge */}
      <div className="mb-4">
        <span className="inline-block px-4 py-1.5 bg-linear-to-r from-pink-100 to-purple-100 text-pink-600 text-xs font-medium rounded-full">
          Based on mood log
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-pink-600 text-xl mb-6">
        Recommended for You
      </h3>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
          {/* <Image
            src={consultant.image}
            alt={consultant.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          /> */}
          <User className="w-full h-full text-gray-300" />
        </div>
      </div>

      {/* Name */}
      <h4 className="font-bold text-gray-900 text-lg">
        {consultant.name}
      </h4>

      {/* Role */}
      <p className="text-sm text-gray-500 mb-3">
        ({consultant.role})
      </p>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        <span className="text-sm font-semibold text-gray-900">
          {consultant.rating}
        </span>
        <span className="text-sm text-gray-500">
          ({consultant.sessions}+ Sessions)
        </span>
      </div>

      {/* Button */}
      <button className="w-full py-3 rounded-full bg-linear-to-r from-pink-500 to-pink-600 text-white font-semibold text-sm hover:shadow-lg transition-all">
        Book a Therapy Session →
      </button>

    </div>
  )
}