"use client"

import Link from "next/link"

import { Kayaktitleinfo } from "@/config/kayaktitleinfo"
import { Locationdata } from "@/config/locationdata"
import { LocationDateConfig } from "@/config/locationdate"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import KayakDesc from "@/components/kayakdescription"
import LocationDate from "@/components/locationdate"
import TopSection from "@/components/topsection"

export default function IndexPage() {
  return (
    <main>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
        <TopSection />
        <div className="flex flex-wrap justify-center md:justify-start">
          <form className="flex flex-wrap ml-1">
            <LocationDate />
            {/* {locationdata.map((location) => (
              <LocationDate key={location.name} name={location.name} />
            ))} */}
          </form>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-3xl mt-12">
            What KAYAK brings to the table.
          </span>
        </div>
        <div className="flex flex-row">
          {Kayaktitleinfo.map((info) => (
            <KayakDesc
              key={info.title}
              title={info.title}
              subinfo={info.subinfo}
              image=""
            />
          ))}
        </div>
      </section>
    </main>
  )
}
