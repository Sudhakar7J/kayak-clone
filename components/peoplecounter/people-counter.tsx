import React, { useState } from "react"

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
}) => (
  <div className="flex items-center">
    <label className="mr-2">{label}:</label>
    <div className="counter flex items-center mt-2">
      <button
        onClick={onDecrement}
        className="px-2 py-1 bg-transparent text-blue-400 font-semibold rounded-md border ml-10"
        disabled={count === 0}
      >
        -
      </button>
      <span className="mx-2">{count}</span>
      <button
        onClick={onIncrement}
        className="px-2 py-1 bg-transparent text-blue-400 font-semibold rounded-md border"
      >
        +
      </button>
    </div>
  </div>
)

const PeopleCounter: React.FC = () => {
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

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
    <div>
      <div className="line">
        <Counter
          label="Rooms"
          count={rooms}
          onIncrement={handleRoomIncrement}
          onDecrement={handleRoomDecrement}
        />
      </div>
      <div className="line">
        <Counter
          label="Adults"
          count={adults}
          onIncrement={handleAdultIncrement}
          onDecrement={handleAdultDecrement}
        />
      </div>
      <div className="line">
        <Counter
          label="Children"
          count={children}
          onIncrement={handleChildIncrement}
          onDecrement={handleChildDecrement}
        />
      </div>
    </div>
  )
}

export default PeopleCounter
