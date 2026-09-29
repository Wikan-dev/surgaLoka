import musicIcon from "../svg/Icon.svg"
import volume from "../svg/Button - Pause or play ceremonial music_margin.svg"

export default function MusicBar() {
  return (
    <div className="flex flex-row bg-primary-100 items-center w-fit mx-auto px-3 py-2 gap-2">
      <div className="rounded-full w-5 h-5 bg-amber-900"></div>
      <img src={musicIcon} className="w-3 bg-primary-100"/>
      <h1 className>GENDING SEMAR PEGULINGAN</h1>
      <img src={volume} className="w-5 bg-primary-100"/>
    </div>
  )
}
