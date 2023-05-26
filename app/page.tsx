import Link from "next/link"

import { LocationDateConfig } from "@/config/locationdate"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import LocationDate from "@/components/locationdate"
import TopSection from "@/components/topsection"

export default function IndexPage() {
  return (
    <main>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <TopSection />
        <form className="flex flex-wrap">
          {LocationDateConfig.map((name) => (
            <LocationDate key={name.name} isSwitch={Boolean(name.isSwitch)} />
          ))}
        </form>
      </section>
    </main>
  )
}
