import Image from "next/image"
import { Star } from "lucide-react"

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
  const renderStars = () => {
    const stars = parseInt(location.stars)
    const starIcons = []

    for (let i = 0; i < stars; i++) {
      starIcons.push(
        <div key={i} className="flex">
          <Star size={14} className="text-black opacity-60 fill-black" />
        </div>
      )
    }

    return starIcons
  }
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
          <div className="flex mt-1 items-center justify-items-center">
            <div className="flex flex-row text-sm"> {renderStars()}</div>
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
