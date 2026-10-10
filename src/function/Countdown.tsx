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

  return ( 
    <div>
      hari: {days}, jam: {hours}, menit: {minutes}, detik: {seconds} 
    </div>
  )
}
