import { useState, useEffect } from 'react';
import type CountdownProps from '../helper/types.tsx';
import timeIcon from '../assets/svg/Container(6).svg';

export default function Countdown({ targetDate }:CountdownProps ) {
  const getSecondLeft = () => Math.max(0, Math.floor((new Date(targetDate) - new Date()) / 1000 ));

  const [timeLeft, setTimeLeft] = useState(getSecondLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getSecondLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor(timeLeft  % (3600 * 24) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60;

  const targetDateData = [
    { nama: 'Hari', data: days },
    { nama: 'Jam', data: hours },
    { nama: 'Menit', data: minutes },
    { nama: 'Detik', data: seconds },
  ];

  return ( 
    <div className='bg-primary-50 p-5 rounded-2xl mt-10 shadow-xl/20'>
       <div className='flex flex-row gap-3 justify-center'>
        <img src={timeIcon} className='w-5' />
        <h1 className='font-jakarta text-primary-700 text-lg tracking-widest'>MENGHITUNG HARI BAIK</h1>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {targetDateData.map((date, i) => (
          <div key={i} className='font-playfair text-center bg-white py-5 rounded-2xl text-primary-600 mt-10'>
            <h1 className='text-5xl'>{date.data}</h1>
            <h1 className='text-2xl'>{date.nama}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
