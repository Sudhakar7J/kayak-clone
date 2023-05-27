import React, { useState } from "react"
import { CalendarDays } from "lucide-react"
import Datepicker from "react-tailwindcss-datepicker"

export function Dateselector() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  })

  const handleValueChange = ({
    startDate,
    endDate,
  }: {
    startDate: any
    endDate: any
  }) => {
    console.log("newValue:", { startDate, endDate })
    setValue({ startDate, endDate })
  }

  return (
    <div className="relative flex items-center mb-1 w-96 lg:w-auto">
      <CalendarDays className="absolute left-3 text-black pl-1 z-50" />
      {/* <button className="w-96 h-12 p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300"></button> */}
      <Datepicker
        value={value}
        onChange={handleValueChange}
        displayFormat={"DD/MM/YYYY"}
        inputClassName={
          "w-96 h-12 p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black hover:bg-gray-300"
        }
      />
    </div>
  )
}

export default Dateselector
