"use client";

import Image from "next/image";

export function WellnessCard() {
  return (
    <div className="relative rounded-xl p-8 text-center overflow-hidden h-full flex flex-col items-center justify-center">
      {/* BG Image */}
      <div className="absolute inset-0 bg-[url('/logo/Frame1745.png')] bg-cover bg-center opacity-100"></div>

      {/* Decorative leaves */}
      {/* <div className="absolute top-6 right-6 text-green-300 text-3xl opacity-50 z-10">🍃</div>
  <div className="absolute bottom-6 left-6 text-green-300 text-3xl opacity-50 z-10">🍃</div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-34 h-34 bg-transparent rounded-full flex items-center justify-center">
          <Image
            src="/logo/Group.png"
            alt="Calm Icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <h3 className="font-bold text-green-600 text-2xl mb-4">
          You Are Calm Today
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
          Staying calm helps you think clearly and make better decisions. Take a
          deep breath and continue your day with a peaceful mind.
        </p>
      </div>
    </div>
  );
}
