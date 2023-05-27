import { BedDouble, Search, User } from "lucide-react"

export function Staysaddress({}: {}) {
  return (
    <div className="flex justify-evenly">
      <div className="flex-1">
        <div className="relative flex">
          <BedDouble className="absolute left-3 text-black pl-1 mt-3" />
          <input
            className="w-96 h-12 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300"
            placeholder="Enter a city, hotel, airport, address or landmark"
          ></input>
        </div>
      </div>
    </div>
  )
}
export default Staysaddress
