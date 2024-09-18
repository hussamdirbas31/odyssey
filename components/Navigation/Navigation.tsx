'use client';

import Button from '../Button/Button';
import { useState } from 'react';
import RewardHistory from './RewardHistory';
import ReferralHistory from './ReferralHistory';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState('referral');

  const handleReferralClick = () => {
    setActiveButton('referral');
  };

  const handleRewardsClick = () => {
    setActiveButton('rewards');
  };

  return (
    <div className=' relative top-[2rem] py-12 md:px-[10%]  mt-4   bg-[#110F17]  md:bg-black flex flex-col   gap-[32px] text-white
   rounded-2xl md:rounded-none '>
      <div className='bg-[#110F17] md:bg-black flex items-center gap-[10px] h-[36px]'>
        <Button
          onClick={handleReferralClick}
          className={`z-20 h-[36px] rounded-lg w-[141px] outline-none ${activeButton === 'referral' ? 'bg-[#281D45]' : 'bg-transparent'}`}
        >
          Referral history
        </Button>
        <Button
          onClick={handleRewardsClick}
          className={`h-[36px] z-20 rounded-lg w-[141px] outline-none ${activeButton === 'rewards' ? 'bg-[#281D45]' : 'bg-transparent'}`}
        >
          Rewards history
        </Button>
      </div>
      {activeButton === 'referral' && <ReferralHistory />}
      {activeButton === 'rewards' && <RewardHistory />}
    </div>
  );

}

export default Navigation















