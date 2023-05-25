import {
  User,
  Plane,
  BedDouble,
  Car,
  Palmtree
} from "lucide-react"

export const SideNavConfig = {
  name: "Side nav config",
  sections: [
    {
      name: 'auth',
      items: [
        {
          name: 'signin',
          label: 'Sign in',
          icon: User
        }
      ]
    },
    {
      name: 'domains',
      items: [
        {
          name: 'flights',
          label: 'Flights',
          icon: Plane
        },
        {
          name: 'stays',
          label: 'Stays',
          icon: BedDouble
        },
        {
          name: 'car-rental',
          label: 'Car Rental',
          icon: Car
        },
        {
          name: 'flight-hotel',
          label: 'Flight + Hotel',
          icon: Palmtree
        }
      ]
    }
  ]
}
