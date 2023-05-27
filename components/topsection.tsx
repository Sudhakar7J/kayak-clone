"use client"

import Link from "next/link"

export function TopSection() {
  return (
    <div className="flex flex-col items-center md:items-start justify-start mb-8">
      <div className="flex items-center">
        <span className="font-bold text-3xl">Where do you want to stay?</span>
      </div>
    </div>
  )
}

export default TopSection
