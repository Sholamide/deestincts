// // // src/components/CountdownTimer.tsx
// // 'use client';

// // import { useState, useEffect } from 'react';

// // export function CountdownTimer() {
// //   const targetDate = new Date('2026-02-26T10:00:00+01:00'); // Lagos time (WAT = UTC+1)

// //   const calculateTimeLeft = () => {
// //     const now = new Date();
// //     const difference = targetDate.getTime() - now.getTime();

// //     if (difference <= 0) {
// //       return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
// //     }

// //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
// //     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
// //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// //     return { days, hours, minutes, seconds, expired: false };
// //   };

// //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTimeLeft(calculateTimeLeft());
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   if (timeLeft.expired) {
// //     return (
// //       <div className="text-center">
// //         <p className="text-3xl font-bold text-green-600">Event has started! 🎉</p>
// //         <p className="text-lg text-gray-700 mt-2">See you at Cre8tive Space!</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col items-center gap-4">
// //       <div className="flex flex-wrap justify-center gap-4 md:gap-8">
// //         {[
// //           { label: 'Days', value: timeLeft.days },
// //           { label: 'Hours', value: timeLeft.hours },
// //           { label: 'Minutes', value: timeLeft.minutes },
// //           { label: 'Seconds', value: timeLeft.seconds },
// //         ].map((unit) => (
// //           <div
// //             key={unit.label}
// //             className="bg-white backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 min-w-[90px] text-center transform hover:scale-105 transition"
// //           >
// //             <div className="text-4xl md:text-5xl font-black text-red-500">
// //               {unit.value.toString().padStart(2, '0')}
// //             </div>
// //             <div className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide">
// //               {unit.label}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/CountdownTimer.tsx
// 'use client';

// import { useState, useEffect } from 'react';

// export function CountdownTimer() {
//   const targetDate = new Date('2026-02-26T10:00:00+01:00'); // Lagos time (WAT = UTC+1)

//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const difference = targetDate.getTime() - now.getTime();

//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
//     }

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds, expired: false };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   if (timeLeft.expired) {
//     return (
//       <div className="text-center px-4">
//         <p className="text-2xl sm:text-3xl font-bold text-green-600">Event has started! 🎉</p>
//         <p className="text-base sm:text-lg text-gray-700 mt-3">
//           See you at Cre8tive Space!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center gap-5 sm:gap-6 px-2 sm:px-0">
//       <p className="text-lg sm:text-xl font-semibold text-gray-700 text-center">
//         Time until Ctrl + Chill begins:
//       </p>

//       <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-md">
//         {[
//           { label: 'Days', value: timeLeft.days },
//           { label: 'Hours', value: timeLeft.hours },
//           { label: 'Minutes', value: timeLeft.minutes },
//           { label: 'Seconds', value: timeLeft.seconds },
//         ].map((unit) => (
//           <div
//             key={unit.label}
//             className="
//               bg-white/90 backdrop-blur-md 
//               px-5 py-4 sm:px-7 sm:py-5 
//               rounded-2xl 
//               shadow-lg 
//               border border-white/60 
//               text-center 
//               flex-1 min-w-[120px] sm:min-w-[140px]
//               transform hover:scale-105 transition-all duration-200
//             "
//           >
//             <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600 tracking-tight">
//               {unit.value.toString().padStart(2, '0')}
//             </div>
//             <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 uppercase tracking-wider mt-1">
//               {unit.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// src/components/CountdownTimer.tsx
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