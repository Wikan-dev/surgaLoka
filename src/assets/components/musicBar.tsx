import musicIcon from "../svg/Icon.svg"
import volume from "../svg/Button - Pause or play ceremonial music_margin.svg"

export default function MusicBar() {
  return (
    <div className="flex flex-row bg-musicBar items-center w-fit mx-auto px-3 py-2 gap-2 rounded-full font-jarkarta font-bold">
      <div className="rounded-full w-2 h-2 bg-amber-900"></div>
      <img src={musicIcon} className="w-3"/>
      <h1 className="text-primary-800">GENDING SEMAR PEGULINGAN</h1>
      <img src={volume} className="w-5"/>
    </div>
  )
}
