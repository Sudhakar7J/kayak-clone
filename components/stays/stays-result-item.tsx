import Image from "next/image"
import { BedDouble } from "lucide-react"

import { Stay } from "@/types/stay"

export function StaysResultItem({ stay }: { stay: Stay }) {
  return (
    <div className="flex cursor-pointer p-3 hover:bg-slate-100">
      <div className="relative h-16 w-16 overflow-hidden">
        {stay?.imagePath ? (
          <Image src={stay.imagePath} alt={stay.title} fill />
        ) : (
          <BedDouble />
        )}
      </div>
      <div className="ml-3">
        <div className="text-lg font-bold">{stay.title}</div>
        <div className="mt-1 text-sm">{stay.subtitle}</div>
      </div>
    </div>
  )
}
