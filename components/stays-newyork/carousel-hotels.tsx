import { NEWYORK_MOCK_LOCATIONS } from "@/config/hotelnewyorkdata"

import { NewYorkStays } from "./hotel-stays-newyork"

export function HotelsNewYork({}) {
  const randomIndex = Math.floor(Math.random() * NEWYORK_MOCK_LOCATIONS.length)
  const randomLocation = NEWYORK_MOCK_LOCATIONS[randomIndex]
  const otherLocations = NEWYORK_MOCK_LOCATIONS.filter(
    (location, index) => index !== randomIndex
  )

  return (
    <div className="p-3 flex">
      <NewYorkStays location={randomLocation} />
      {otherLocations.map((location) => (
        <NewYorkStays location={location} />
      ))}
    </div>
  )
}

export default HotelsNewYork
