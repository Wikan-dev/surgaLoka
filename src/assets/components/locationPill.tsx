import Icon from "../svg/Container.svg"

export default function LocationPill() {
  return (
    <div className="flex flex-row gap-3 bg-amber-50 px-2 py-1 rounded-full drop-shadow-md">
      <img src={Icon} className='w-5 h-5' />
      <h1 className='tracking-widest font-jakarta'>Bale Puri Agung</h1>
    </div>
  )
}
