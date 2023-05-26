export function Locationdate({ isSwitch }: { isSwitch?: boolean }) {
  const inputClassName = `block p-4 pl-10 mx-0.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black ${
    isSwitch ? "w-10" : "w-50"
  }`

  return (
    <div className="flex">
      <input
        type="search"
        id="default-search"
        className={inputClassName}
        placeholder=""
        required
      />
    </div>
  )
}

export default Locationdate
