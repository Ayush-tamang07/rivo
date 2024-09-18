import React, { useState, useEffect } from 'react';
import Exclusive from "../../../assets/exclusive-offer-img.png";

function ExclusiveOffer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-09-25') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='primary p-7 flex w-full max-w-[1110px] mx-auto justify-evenly items-center mt-24'>
      <img src={Exclusive} alt="image" width={350} />
      <div className='w-80 ml-5'> 
        <h1 className='font-bold mb-2 roboto-slab text-primary text-4xl'>Exclusive Offer</h1>
        <p className='mb-4 overall-text text-primary'>
          Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
        </p>

        {/* Timer Display */}
        <div className="flex space-x-4 mb-4 text-primary">
          <div className="bg-white text-center p-4 shadow-md">
            <p className="text-2xl font-bold">{timeLeft.days || '00'}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="bg-white text-center p-4 shadow-md">
            <p className="text-2xl font-bold">{timeLeft.hours || '00'}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-white text-center p-4 shadow-md">
            <p className="text-2xl font-bold">{timeLeft.minutes || '00'}</p>
            <p className="text-sm">Min</p>
          </div>
        </div>

        <button className='border-2 bg-[#224F34] py-4 px-8 text-xl text-white'>BUY NOW</button>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
