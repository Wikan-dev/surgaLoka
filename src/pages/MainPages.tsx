import iconOutline from '../assets/svg/Container(4).svg';
import iconMusic from '../assets/svg/Icon.svg';
import image from '../assets/png/AB6AXuBGuohL2q-6sZ9MeVaxn3QRTsro3jzjn_9PTkeqFGCdIkNKC9q-EKCyu6e2fuu2AuoYFLip2sXB508lj6uaCKOSNZ4OmF9Vvu9U9NKkDwUsBRti1OuZjafeic_-XZc29pp_mPlw_sAlsZzZ2cNur27B8UuvhRdVGjdXbx26oyM3r-YfVGtt-R2x-Gb8pCRdDtOoAiGaD3xg9uNijSC0MlT5OW01rbntmejZKQ0ca9XrMBw0aK.png';
import temple from '../assets/svg/Container(5).svg';

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
    </div>
  )
}
