"use client"

import { SideNavConfig } from "@/config/side-nav"
import { cn } from "@/lib/utils"
import { useScreenSize } from "@/hooks/useScreenSize"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

import { Separator } from "./ui/separator"

const selectedNavItem = "stays"

export function SideNav() {
  const { isMobileScreen } = useScreenSize()

  const dynamicSheetSize = cn({
    default: !isMobileScreen,
    full: isMobileScreen,
  }) as "full" | "default"

  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="mr-4" />
      </SheetTrigger>
      <SheetContent position="left" size={dynamicSheetSize}>
        {SideNavConfig.sections.map((section) => (
          <>
            <div key={section.name} className="py-4">
              {section.items.map((navItem) => (
                <div
                  key={navItem.name}
                  className="my-3 flex items-center p-2 hover:bg-slate-300"
                >
                  <navItem.icon
                    size={20}
                    color={navItem.name === selectedNavItem ? "grey" : "white"}
                  />
                  <span
                    className={`ml-2 text-sm ${
                      navItem.name === selectedNavItem && "font-bold"
                    }`}
                  >
                    {navItem.label}
                  </span>
                </div>
              ))}
            </div>
            <Separator />
          </>
        ))}
      </SheetContent>
    </Sheet>
  )
}
