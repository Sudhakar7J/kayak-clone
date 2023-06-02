"use client"

import Link from "next/link"

import { KayakDescMap } from "@/components/kayak-desc-map"
import LocationDate from "@/components/locationdate"
import { Section1 } from "@/components/sectioncomponents/kayak-stays-section1"
import { Section2 } from "@/components/sectioncomponents/kayak-stays-section2"
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
          </form>
        </div>
        <Section1 />
        <KayakDescMap />
        <Section2 />
        <div className="flex flex-row">
          <HotelsNewYork />
        </div>
      </section>
    </main>
  )
}
