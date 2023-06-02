import { NEWYORK_MOCK_LOCATIONS } from "@/config/hotelnewyorkdata"

import { NewYorkStays } from "./hotel-stays-newyork"

export function HotelsNewYork({}) {
  return (
    <div className="p-3 flex">
      {NEWYORK_MOCK_LOCATIONS.map((location) => (
        <NewYorkStays location={location} />
      ))}
    </div>
  )
}

export default HotelsNewYork
