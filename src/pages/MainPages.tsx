import iconOutline from '../assets/svg/Container(4).svg';
import iconMusic from '../assets/svg/Icon.svg';
import image from '../assets/png/AB6AXuBGuohL2q-6sZ9MeVaxn3QRTsro3jzjn_9PTkeqFGCdIkNKC9q-EKCyu6e2fuu2AuoYFLip2sXB508lj6uaCKOSNZ4OmF9Vvu9U9NKkDwUsBRti1OuZjafeic_-XZc29pp_mPlw_sAlsZzZ2cNur27B8UuvhRdVGjdXbx26oyM3r-YfVGtt-R2x-Gb8pCRdDtOoAiGaD3xg9uNijSC0MlT5OW01rbntmejZKQ0ca9XrMBw0aK.png';
import temple from '../assets/svg/Container(5).svg';
import RoyalFam from '../assets/components/royalFam.tsx';
import engagedImage from '../assets/webp/royal_balinese_wedding_couple_in_payas_agung_attire.webp';

export default function MainPages() {
  return (
    <div>
      <header className='relative z-50 -mx-10 -mt-3 px-10 pt-3 pb-5 drop-shadow-md/10 flex justify-between bg-white'>
        <div className='flex flex-row'>
          <img src={iconOutline} className='w-8' />
          <div className='text-2xl text-primary-600 ml-4'>
            <h1 className='font-playfair font-bold text-4xl'>Sampul</h1>
            <h2 className='text-lg font-jakarta text-primary-900'>PAWIWEHAN AGENG</h2>
          </div>
        </div>
        <div className='flex flex-row items-center gap-6'>
          <img src={iconMusic} className='w-5' />
          <img src={image} className='w-12 h-12 rounded-xl' />
        </div>
      </header>
      
      <div className='mt-14 bg-primary-100 w-fit mx-auto px-4 py-1 rounded-full flex items-center justify-center gap-2'>
        <img src={temple} alt='' className='w-5' />
        <p className='font-jakarta tracking-widest '>AWIWAHAN AGENG</p>
      </div>
      <div className='flex gap-6 flex-col mt-6'>
        <h1 className='text-primary-600 font-jakarta text-center text-4xl font-medium'>ॐ स्वस्त्यस्तु</h1>
        <h1 className='text-primary-900 font-garamond italic text-center text-4xl'>"Om Swastyastu"</h1>
      </div>
      <div className='h-1 rounded-full w-20 bg-primary-300 mx-auto mt-10' />
      <RoyalFam />
      <div className='relative overflow-hidden rounded-2xl relative my-10'>
        <img src={engagedImage} className='w-full rounded-2xl' />
        <div className='absolute inset-0 bg-linear-to-b from-white/0 to-black/70 z-10' />
        <div className='absolute inset-1 z-10 h-fit mt-auto mb-10 px-7 text-white text-center flex flex-col gap-4'>
          <h1 className='text-primary-200 font-jakarta tracking-widest text-2xl'>RAHINA SUKRA PALING MATAL</h1>
          <p className='font-playfair text-primary-50 text-5xl'>Jumat, 24 Oktober 2026</p>
          <p className='font-garamond text-3xl italic'>Puri Agung Ubud, Gianyar-Bali</p>
        </div>
      </div>
    </div>
  )
}
