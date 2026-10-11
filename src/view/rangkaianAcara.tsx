import bunga from '../assets/svg/Container(4).svg';

export default function RangkaianAcara() {
  return (
    <div className='mt-10'>
      <div className='flex flex-col justify-center items-center'>
        <img src={bunga} className="w-10" />
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='font-playfair text-6xl'>Rangkaian Acara</h1>
          <p className='text-4xl font-garamond italic text-primary-800'>Dudonan Karya Pawiwahan</p>
        </div>
      </div>
    </div>
  )
}
