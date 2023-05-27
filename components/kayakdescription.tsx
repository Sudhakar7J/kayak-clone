import Link from "next/link"

const KayakDesc = ({
  image,
  title,
  subinfo,
}: {
  image: string
  title: string
  subinfo: string
}) => {
  return (
    <div className="flex border rounded-xl w-72 h-40 mx-2 dark:border-gray-400">
      <div className="flex p-4">
        {image}
        <div className="flex-col ml-4">
          <div className=" font-bold text-lg ">{title}</div>
          <div className="text-xs mt-4 ">{subinfo}</div>
        </div>
      </div>
    </div>
  )
}

export default KayakDesc
