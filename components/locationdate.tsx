import { BedDouble, Search, User } from "lucide-react"

import { Locationdata } from "@/config/locationdata"
import Dateselector from "@/components/dateselector"
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
      <div className="flex-1">
        <div className="relative flex items-center mb-1 w-48">
          <User className="absolute left-3 text-black pl-1" />
          <button className="w-96 h-12 p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300">
            1 room, 2 guests
          </button>
        </div>
      </div>
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
