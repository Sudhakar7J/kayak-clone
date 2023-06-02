"use client"

import Link from "next/link"

import { Kayaktitleinfo } from "@/config/kayaktitleinfo"
import { LocationDateConfig } from "@/config/locationdate"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import KayakDesc from "@/components/kayakdescription"
import LocationDate from "@/components/locationdate"
import HotelsNewYork from "@/components/stays-newyork/carousel-hotels"
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
          <span className="font-bold text-2xl mt-12">
            What KAYAK brings to the table.
          </span>
        </div>
        <div className="flex flex-row">
          {Kayaktitleinfo.map((info) => (
            <KayakDesc
              key={info.title}
              title={info.title}
              subinfo={info.subinfo}
              image={info.image}
            />
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-3xl mt-12">
              Stays near New York
            </span>
            <button className="border border-black rounded-md font-semibold p-2 mt-4">
              See all
            </button>
          </div>
          <span className="text-md mt-12">Wed, 7 Jun - Thu, 8 Jun</span>
        </div>
        <div className="flex flex-row">
          <HotelsNewYork />
        </div>
      </section>
    </main>
  )
}
