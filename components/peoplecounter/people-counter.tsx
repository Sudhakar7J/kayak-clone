import React, { useMemo, useState } from "react"

import { ChildrenContainer } from "./children-container"

interface CounterProps {
  label: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const Counter: React.FC<CounterProps> = ({
  label,
  count,
  onIncrement,
  onDecrement,
}) => {
  const isDecrementDisabled = useMemo(() => {
    if (label.toLowerCase() === "children") {
      // count should be 0
      return count === 0
    }

    return count === 1
  }, [count, label])

  return (
    <div className="flex items-center justify-between w-full">
      <label className="mr-2">{label}</label>
      <div className="counter flex items-center mt-2">
        <button
          onClick={onDecrement}
          className={`px-2 py-1 bg-transparent text-blue-400 font-semibold rounded-md border ${
            isDecrementDisabled ? "opacity-50" : ""
          }`}
          disabled={isDecrementDisabled}
        >
          -
        </button>
        <span className="mx-2 w-2">{count}</span>
        <button
          onClick={onIncrement}
          className="px-2 py-1 bg-transparent text-blue-400 font-semibold rounded-md border"
        >
          +
        </button>
      </div>
    </div>
  )
}

const PeopleCounter: React.FC = ({
  rooms,
  setRooms,
  adults,
  setAdults,
  children,
  setChildren,
}: {
  rooms: number
  setRooms: (rooms: number) => void
  adults: number
  setAdults: (adults: number) => void
  children: number
  setChildren: (children: number) => void
}) => {
  const handleRoomIncrement = () => {
    setRooms((prevRooms) => prevRooms + 1)
    setAdults((prevAdults) => prevAdults + 1)
  }

  const handleRoomDecrement = () => {
    if (rooms > 1) {
      setRooms((prevRooms) => prevRooms - 1)
      if (adults > rooms - 1) {
        setAdults((prevAdults) => prevAdults - 1)
      }
    }
  }

  const handleAdultIncrement = () => {
    setAdults((prevAdults) => prevAdults + 1)
  }

  const handleAdultDecrement = () => {
    if (adults > 1) {
      setAdults((prevAdults) => prevAdults - 1)
    }
  }

  const handleChildIncrement = () => {
    setChildren((prevChildren) => prevChildren + 1)
  }

  const handleChildDecrement = () => {
    if (children > 0) {
      setChildren((prevChildren) => prevChildren - 1)
    }
  }

  return (
    <div className="w-full">
      <Counter
        label="Rooms"
        count={rooms}
        onIncrement={handleRoomIncrement}
        onDecrement={handleRoomDecrement}
      />
      <Counter
        label="Adults"
        count={adults}
        onIncrement={handleAdultIncrement}
        onDecrement={handleAdultDecrement}
      />
      <Counter
        label="Children"
        count={children}
        onIncrement={handleChildIncrement}
        onDecrement={handleChildDecrement}
      />

      {children > 0 && <div className="my-5 -mx-6 border border-gray-500" />}

      <ChildrenContainer count={children} />
    </div>
  )
}

export default PeopleCounter
