import { BedDouble, Search, User } from "lucide-react"

import Dateselector from "@/components/dateselector"
import PeopleCounterDropdown from "@/components/peoplecounter/people-dropdown-counter"
import Staysaddress from "@/components/staysaddress"

export function Locationdate({}: {}) {
  return (
    <div className="flex justify-evenly">
      <div className="flex-1">
        <Staysaddress />
      </div>
      <div className="flex-1">
        <Dateselector />
      </div>
      <PeopleCounterDropdown />
      <div className="flex-1">
        <div className="flex items-center justify-end">
          <button className="rounded-md border-1 bg-kayakorange h-12 w-full lg:w-auto px-4 flex items-center justify-center text-center md:text-left">
            <Search className="text-white text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Locationdate
