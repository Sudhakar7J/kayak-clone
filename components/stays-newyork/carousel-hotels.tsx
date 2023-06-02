import { NEWYORK_MOCK_LOCATIONS } from "@/config/hotelnewyorkdata"

import { NewYorkStays } from "./hotel-stays-newyork"

export function HotelsNewYork({}) {
  const shuffledLocations = [...NEWYORK_MOCK_LOCATIONS]

  for (let i = shuffledLocations.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledLocations[i], shuffledLocations[j]] = [
      shuffledLocations[j],
      shuffledLocations[i],
    ]
  }

  return (
    <div className="p-3 flex">
      {shuffledLocations.map((location) => (
        <NewYorkStays key={location.hotel} location={location} />
      ))}
    </div>
  )
}

export default HotelsNewYork
