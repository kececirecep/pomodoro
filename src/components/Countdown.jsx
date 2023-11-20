import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [hours, setHours] = useState(1); // Saat
  const [minutes, setMinutes] = useState(0); // Dakika
  const [seconds, setSeconds] = useState(0); // Saniye

  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        const newTotalSeconds = totalSeconds - 1;
        const newHours = Math.floor(newTotalSeconds / 3600);
        const newMinutes = Math.floor((newTotalSeconds % 3600) / 60);
        const newSeconds = newTotalSeconds % 60;
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const totalDuration = 3600; // Toplam süre (1 saat)

  const progressBarStyle = {
    width: `${((totalDuration - hours * 3600 - minutes * 60 - seconds) / totalDuration) * 100}%`, 
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className="progressBar mb-24">
        <div className="filler" style={progressBarStyle}></div>
      </div>
      <h1 className='p-40 border-2 border-[#007bff] text-[#007bff] rounded-full h-52 w-52 text-5xl font-semibold flex items-center justify-center'>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>
    </div>
  );
};

export default Countdown;
