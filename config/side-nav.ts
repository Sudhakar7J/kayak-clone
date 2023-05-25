import {
  BedDouble,
  Briefcase,
  Car,
  Clock5,
  Globe,
  ListOrdered,
  Palmtree,
  Plane,
  Subtitles,
  User,
} from "lucide-react"

export const SideNavConfig = {
  name: "Side nav config",
  sections: [
    {
      name: "auth",
      items: [
        {
          name: "signin",
          label: "Sign in",
          icon: User,
        },
      ],
    },
    {
      name: "domains",
      items: [
        {
          name: "flights",
          label: "Flights",
          icon: Plane,
        },
        {
          name: "stays",
          label: "Stays",
          icon: BedDouble,
        },
        {
          name: "car-rental",
          label: "Car Rental",
          icon: Car,
        },
        {
          name: "flight-hotel",
          label: "Flight + Hotel",
          icon: Palmtree,
        },
      ],
    },
    {
      name: "explore-page",
      items: [
        {
          name: "explore",
          label: "Explore",
          icon: Globe,
        },
        {
          name: "direct",
          label: "Direct",
          icon: Car,
        },
        {
          name: "bestTime",
          label: "Best Time to Travel",
          icon: Clock5,
        },
      ],
    },
    {
      name: "Feedback",
      items: [
        {
          name: "feedback",
          label: "Feedback",
          icon: Subtitles,
        },
      ],
    },
    {
      name: "Trips",
      items: [
        {
          name: "trips",
          label: "Trips",
          icon: ListOrdered,
        },
      ],
    },
    {
      name: "Business",
      items: [
        {
          name: "business",
          label: "Kayak for Business",
          icon: Briefcase,
        },
      ],
    },
  ],
}
