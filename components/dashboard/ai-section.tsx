"use client";

import { Send } from "lucide-react";

export function AISection() {
  return (
    <div className="space-y-6 mb-8">
      {/* Header with Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
          C
        </div>
        <h2 className="text-xl font-semibold text-gray-900">ConsuITOpen AI</h2>
      </div>

      {/* Quick Questions - Horizontal Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10 sm:max-w-[80%] lg:max-w-[60vw] sm:ml-auto">
        <button className="w-full sm:flex-1 px-4 sm:px-5 py-3 bg-white hover:bg-gray-50 rounded-2xl sm:rounded-3xl text-sm text-gray-700 transition-colors text-center border border-gray-200">
          <span className="text-gray-600 mr-2">
            What are the future benefits of choosing PCM in 11th?
          </span>
          <span className="inline-block">↗</span>
        </button>
        <button className="w-full sm:flex-1 px-4 sm:px-5 py-3 sm:py-4 bg-white hover:bg-gray-50 rounded-2xl sm:rounded-xl text-sm text-gray-700 transition-colors text-center border border-gray-200">
          <span className="text-gray-600 mr-2">
            How to balance board exams and competitive prep?
          </span>
          <span className="inline-block">↗</span>
        </button>
      </div>

      {/* Input with Send Button */}
      <div className="relative flex justify-center items-center">
        <textarea
          placeholder="Type your specific question here..."
          rows={3}
          className="w-full px-4 sm:px-6 pt-4 pb-16 sm:pb-10 pr-16 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:ring-0 resize-none"
        />

        <button className="absolute rounded-xl p-3 right-3 bg-[linear-gradient(120deg,#1B9BA2,#F69E0A,#EC4899,#1B9BA2)]
bg-size[length:200%_200%] animate-[gradientMove_4s_linear_infinite]">
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
