import { Kayaktitleinfo } from "@/config/kayaktitleinfo"

import KayakDesc from "./kayakdescription"

export function KayakDescMap() {
  return (
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
  )
}
