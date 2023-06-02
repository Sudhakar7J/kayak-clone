import Link from "next/link"
import { Home, MessageSquare, Percent, RotateCcw } from "lucide-react"

import { Kayaktitleinfo } from "@/config/kayaktitleinfo"

const icons = {
  Home,
  MessageSquare,
  Percent,
  RotateCcw,
}

const KayakDesc = ({
  image,
  title,
  subinfo,
}: {
  image: keyof typeof icons
  title: string
  subinfo: string
}) => {
  const Icon = icons[image]

  return (
    <div className="flex border rounded-xl w-72 h-w-min mx-2  dark:border-gray-400 pb-6">
      <div className="flex p-4 items-center">
        <div className="flex-col ml-4 ">
          <div className="mt-2 border rounded-sm bg-kayakbrings w-10 h-10 flex items-center justify-center text-kayakbringsicon">
            {Icon && <Icon size={25} />}{" "}
          </div>
          <div className="font-bold text-lg mt-2">{title}</div>
          <div className="text-xs mt-1 ">{subinfo}</div>
        </div>
      </div>
    </div>
  )
}
export default KayakDesc
