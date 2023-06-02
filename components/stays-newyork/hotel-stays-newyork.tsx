import Image from "next/image"

interface Location {
  hotel: string
  location: string
  imagePath?: string
  stars: string
  review: string
  rating: string
  cost: string
}

export function NewYorkStays({ location }: { location: Location }) {
  return (
    <div className="flex flex-col mx-2">
      <div className="relative rounded-lg">
        {location?.imagePath && (
          <div className="inline-block w-80 h-60">
            <Image src={location.imagePath} alt={location.hotel} fill />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between h-40">
        <div className="flex flex-col justify-between">
          <div className="text-lg font-bold mt-2 whitespace-normal break-words">
            {location.hotel}
          </div>
          <div className="flex mt-1">
            <div className="text-sm">{location.stars}</div>
            <div className="text-sm ml-4">{location.review}</div>
            <div className="text-sm ml-2">{location.rating}</div>
          </div>
          <div className="text-sm">{location.location}</div>
        </div>
        <div className=" justify-end mt-4 text-sm font-bold">
          ₹{location.cost}
        </div>
      </div>
    </div>
  )
}
