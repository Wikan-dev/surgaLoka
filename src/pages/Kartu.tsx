import MusicBar from '../assets/components/musicBar.tsx';
import cardPhoto from '../assets/png/AB6AXuBGuohL2q-6sZ9MeVaxn3QRTsro3jzjn_9PTkeqFGCdIkNKC9q-EKCyu6e2fuu2AuoYFLip2sXB508lj6uaCKOSNZ4OmF9Vvu9U9NKkDwUsBRti1OuZjafeic_-XZc29pp_mPlw_sAlsZzZ2cNur27B8UuvhRdVGjdXbx26oyM3r-YfVGtt-R2x-Gb8pCRdDtOoAiGaD3xg9uNijSC0MlT5OW01rbntmejZKQ0ca9XrMBw0aK.png';
import LocationPill from '../assets/components/locationPill.tsx';
import MainGuest from '../assets/components/MainGuest.tsx';
import DateLoc from '../assets/components/dateLoc.tsx';
export default function Kartu() {
  return(
    <div>
      <MusicBar />
      <div className="flex flex-col gap-3 mt-5">
        <h3 className="text-primary-700 font-jakarta tracking-[5px] text-center text-lg">PAIWAHAN AGUNG</h3>
        <h1 className="font-playfair text-center font-bold text-7xl">Anand & Gayatri</h1>
        <h3 className="font-great-vibes text-primary-700 text-2xl text-center">Om Swastiastu</h3>
      </div>
      <div>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute top-4 left-4 z-10">
            <LocationPill />
          </div>
          <img src={cardPhoto} className="w-full rounded-3xl" />
          <div className="absolute inset-0 bg-linear-to-b from-[#00000000] from-55% to-[#000000]" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-5">
            <h1 className="text-white text-5xl font-garamond text-center w-full">"Ayam Atma Brahma"</h1>
            <h1 className="text-white text-2xl mt-3 font-garamond text-center w-full">"Menyatukan dua jiwa dalam lingkar dharma suci"</h1>
          </div>
        </div>
      </div>
      <MainGuest/>
      <DateLoc />
    </div>
  )
}
