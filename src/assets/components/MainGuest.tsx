import bunga from '../svg/Corner Balinese Relief Accents (Visual Depth).svg';
import bintang from '../svg/Container(1).svg';
import icon_kartu from '../svg/Container(2).svg';
import surat from '../svg/Container(3).svg';

export default function MainGuest() {
  return (
    <div className='bg-white w-full p-10 drop-shadow-md rounded-2xl relative mt-10'>
        <img src={bunga} className="w-7 absolute right-5" />
        <img src={bunga} className="w-7 absolute left-5" />
        <img src={bunga} className="w-7 absolute bottom-5 left-5" />
        <img src={bunga} className="w-7 absolute bottom-5 right-5" />
      <div className='px-3 py-2 bg-primary-100 gap-2 flex flex-row w-fit mx-auto rounded-2xl items-center'>
        <img src={bintang} className='w-5' />
        <h1 className="font-jakarta tracking-widest ">VIP ROYAL GUEST</h1>
      </div>
      <div className="mt-7 flex flex-col gap-5">
        <h1 className='text-primary-600 font-garamond text-3xl text-center'>Kepada Yth. Tamu Undangan Terhormat:</h1>
        <h1 className="font-playfair text-5xl font-bold text-center">Ida Bagus Arya & Keluarga</h1>
        <div className='font-jakarta bg-primary-100 w-fit px-4 mx-auto mt-4 drop-shadow-md rounded-2xl'>
          <h1>Meja Kehormatan - Sesi 1 (Pagi)</h1>
        </div>
      </div>
      <div className='bg-linear-to-tl from-primary-400 to-primary-600 p-7 rounded-3xl w-fit mx-auto drop-shadow-md mt-10 drop-shadow-md'>
        <img src={icon_kartu} className='w-20 mx-auto ' />
      </div>
      <button className='bg-primary-700 font-jakarta text-white flex flex-row text-2xl py-5 w-full justify-center gap-3 rounded-2xl mt-10 mb-10 drop-shadow-md hover:bg-primary-600 transition-all duration-200 hover:scale-105'><img src={surat} className='w-7' />BUKA SURAT UNDANGAN</button>
    </div>
  )
}
