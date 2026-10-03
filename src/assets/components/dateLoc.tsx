import locIcon from '../svg/Margin.svg';
import dateIcon from '../svg/Icon(1).svg';

export default function DateLoc() {
  return (
    <div className='grid grid-cols-2 gap-5 mt-10'>
      <div className='flex flex-row items-start gap-4 rounded-2xl p-6 bg-white drop-shadow-sm'>
        <img src={dateIcon} className='w-10' />
        <div className='font-jakarta text-xl text-primary-800'>
          <h1 className='tracking-widest'>HARI & TANGGAL</h1>
          <p className='text-xl tracking-widest mt-1'>Minggu, 24 Nov</p>
          <p className='font-garamond  mt-2 text-3xl'>Pukul 09:00 WITA</p>
        </div>
      </div>
      <div className='flex flex-row items-start gap-4 drop-shadow-sm rounded-2xl p-6 bg-white'>
        <img src={dateIcon} className='w-10' />
        <div className='font-jakarta text-xl text-primary-800'>
          <h1 className='tracking-widest'>HARI & TANGGAL</h1>
          <p className='text-xl tracking-widest mt-1'>Minggu, 24 Nov</p>
          <p className='font-garamond  mt-2 text-3xl'>Pukul 09:00 WITA</p>
        </div>
      </div>
    </div>
  )
}

