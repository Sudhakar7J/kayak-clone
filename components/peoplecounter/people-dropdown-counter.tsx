import { User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import PeopleCounter from "./people-counter"

export function PeopleCounterDropdown({}: {}) {
  return (
    <div className="flex justify-evenly">
      <div className="flex-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative flex items-center mb-1 w-48">
              <User className="absolute left-3 text-black pl-1" />
              <button className="w-96 h-12 p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300">
                1 room, 2 guests
              </button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-60 flex items-center">
              <PeopleCounter />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
export default PeopleCounterDropdown
