import React from 'react';

export const VerticalAxis = () => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-12 -ml-6 flex flex-col items-center justify-between z-10 pointer-events-none hidden md:flex">
      {/* Top Arrow (Urgent) */}
      <div className="relative flex flex-col items-center">
        <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-red-700"></div>
        <div className="bg-gradient-to-b from-red-700 to-red-500 w-8 h-32 flex items-center justify-center text-white font-bold writing-vertical py-2 shadow-md">
          <span className="transform rotate-90 whitespace-nowrap text-sm tracking-widest">紧急</span>
        </div>
      </div>

      {/* Center Connector */}
      <div className="w-4 flex-1 bg-gradient-to-b from-red-400 via-gray-300 to-blue-400 opacity-50"></div>

      {/* Bottom Arrow (Not Urgent) */}
      <div className="relative flex flex-col items-center">
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 w-8 h-32 flex items-center justify-center text-white font-bold writing-vertical py-2 shadow-md">
          <span className="transform rotate-90 whitespace-nowrap text-sm tracking-widest">不紧急</span>
        </div>
        <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[24px] border-t-blue-500"></div>
      </div>
    </div>
  );
};

export const HorizontalAxis = () => {
  return (
    <div className="absolute top-1/2 left-0 right-0 h-12 -mt-6 flex flex-row items-center justify-between z-10 pointer-events-none hidden md:flex">
      {/* Left Arrow (Not Important) */}
      <div className="relative flex flex-row items-center">
        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[24px] border-r-sky-500"></div>
        <div className="bg-gradient-to-r from-sky-500 to-sky-400 h-8 w-32 flex items-center justify-center text-white font-bold px-2 shadow-md">
           <span className="text-sm tracking-widest">不重要</span>
        </div>
      </div>

      {/* Center Connector */}
      <div className="h-4 flex-1 bg-gradient-to-r from-sky-400 via-gray-300 to-red-700 opacity-50"></div>

      {/* Right Arrow (Important) */}
      <div className="relative flex flex-row items-center">
        <div className="bg-gradient-to-r from-red-600 to-red-700 h-8 w-32 flex items-center justify-center text-white font-bold px-2 shadow-md">
          <span className="text-sm tracking-widest">重要</span>
        </div>
        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[24px] border-l-red-700"></div>
      </div>
    </div>
  );
};
