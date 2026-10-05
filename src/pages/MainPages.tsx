import iconOutline from '../assets/svg/Container(4).svg';
import iconMusic from '../assets/svg/Icon.svg';
import image from '../assets/png/AB6AXuBGuohL2q-6sZ9MeVaxn3QRTsro3jzjn_9PTkeqFGCdIkNKC9q-EKCyu6e2fuu2AuoYFLip2sXB508lj6uaCKOSNZ4OmF9Vvu9U9NKkDwUsBRti1OuZjafeic_-XZc29pp_mPlw_sAlsZzZ2cNur27B8UuvhRdVGjdXbx26oyM3r-YfVGtt-R2x-Gb8pCRdDtOoAiGaD3xg9uNijSC0MlT5OW01rbntmejZKQ0ca9XrMBw0aK.png';

export default function MainPages() {
  return (
    <div>
      <header className='py-3 flex justify-between'>
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
    </div>
  )
}
