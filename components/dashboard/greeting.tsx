'use client'

export function Greeting() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[#1A9BA1]">Good morning, Alex! 👋</h1>
      
      <div className="bg-linear-to-br from-teal-100 to-yellow-50 border-l-4 border-teal-500 p-4 rounded">
        <p className="text-gray-700 text-sm italic">
          "The future belongs to those who believe in the beauty of their dreams."
        </p>
        <p className="text-gray-600 text-xs mt-2">— Eleanor Roosevelt</p>
      </div>
    </div>
  )
}
