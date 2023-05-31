import { MOCK_LOCATIONS } from "@/config/locationdata"

import { StaysResultItem } from "./stays-result-item"

export function StaysResultsDropdown() {
  return (
    <div className="p-3">
      {MOCK_LOCATIONS.map((stay) => (
        <StaysResultItem stay={stay} />
      ))}
    </div>
  )
}
