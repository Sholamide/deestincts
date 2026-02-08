'use client';

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const targetDate = new Date('2026-02-26T10:00:00+01:00'); // Lagos time (WAT = UTC+1)

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-center px-4">
        <p className="text-2xl sm:text-3xl font-bold text-green-600">Event has started! 🎉</p>
        <p className="text-base sm:text-lg text-gray-700 mt-3">
          See you at Cre8tive Space!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">

      <div
        className="
          flex items-center justify-center gap-3 sm:gap-5 
          bg-gray-900/40 backdrop-blur-md 
          px-6 py-4 sm:px-10 sm:py-5 
          rounded-2xl 
          shadow-lg
          text-red-600 font-mono font-bold text-xl sm:text-3xl tracking-wider
        "
      >
        <span className="min-w-[2.5ch] text-center">{timeLeft.days}D</span>
        <span className="opacity-60">:</span>
        <span className="min-w-[2.5ch] text-center">{timeLeft.hours.toString().padStart(2, '0')}H</span>
        <span className="opacity-60">:</span>
        <span className="min-w-[2.5ch] text-center">{timeLeft.minutes.toString().padStart(2, '0')}M</span>
        <span className="opacity-60">:</span>
        <span className="min-w-[2.5ch] text-center">{timeLeft.seconds.toString().padStart(2, '0')}S</span>
      </div>
    </div>
  );
}