import { ChildItem } from "./child-item"

export function ChildrenContainer({ count }: { count: number }) {
  return (
    <div className="flex flex-col max-h-60 overflow-y-auto">
      {Array.from(Array(count).keys()).map((child, index) => (
        <ChildItem childNumber={index + 1} key={index} />
      ))}
    </div>
  )
}
