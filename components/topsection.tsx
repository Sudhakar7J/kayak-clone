"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"

export function TopSection() {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex items-center">
        <span className="font-bold text-3xl">Where do you want to go?</span>
      </div>
      <div className="mt-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Return</NavigationMenuTrigger>
              <NavigationMenuTrigger>Traveller</NavigationMenuTrigger>
              <NavigationMenuTrigger>Economy</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default TopSection
