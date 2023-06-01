import { useState } from "react"
import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export function ChildItem({ childNumber }: { childNumber: number }) {
  const [ageOfChild, setAgeOfChild] = useState(0)

  const onSelectAge = (age: number) => {
    setAgeOfChild(age)
  }

  return (
    <div className="py-2 flex justify-between items-center pr-4">
      Age of Child {childNumber}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative flex items-center ">
            <input
              className="flex w-20 h-10 border-2 border-black rounded-sm text-center"
              value={ageOfChild > 0 ? ageOfChild : ""}
            />
            <ChevronDown className="absolute right-1 h-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-40 overflow-y-auto ">
          {Array.from(Array(18).keys()).map((age) => (
            <DropdownMenuItem onClick={() => onSelectAge(age)} key={age}>
              {age}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
