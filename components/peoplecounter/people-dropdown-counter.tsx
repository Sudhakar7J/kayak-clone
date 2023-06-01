import { useState } from "react"
import { User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import PeopleCounter from "./people-counter"

export function PeopleCounterDropdown() {
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const AdultsandChildren = () => {
    const totalGuests = adults + children
    return `${rooms} room${rooms > 1 ? "s" : ""}, ${totalGuests} guest${
      totalGuests > 1 ? "s" : ""
    }`
  }
  return (
    <div className="flex justify-evenly">
      <div className="flex-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative flex items-center mb-1 w-48">
              <User className="absolute left-3 text-black pl-1" />
              <button className="w-96 h-12 p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300">
                {AdultsandChildren()}
              </button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-80 flex p-3 px-4 justify-between">
              <PeopleCounter
                {...{
                  rooms,
                  setRooms,
                  adults,
                  setAdults,
                  children,
                  setChildren,
                }}
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default PeopleCounterDropdown
