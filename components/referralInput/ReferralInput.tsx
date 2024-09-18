import React from 'react';
import Button from '../Button/Button';

const ReferralInput = () => {
  return (
   <div className=' z-10  bg-[#110F17] w-full md:w-[60%]   p-4  h-[15rem] flex flex-col items-center justify-center  rounded-3xl'>
    
    <div className='w-full   flex flex-col gap-4  h-[200px]   '>
    <input type="text" placeholder='Referral code' className=' h-[56px] rounded-2xl outline-none p-2 text-white bg-[#2A272D]' />
    <input type="text" placeholder='Referral link' className='h-[56px]  rounded-2xl outline-none p-2 text-white up bg-[#2A272D]'/>
    <div className='h-[56px]  flex flex-row justify-between items-center'>
   <Button className='text-white border border-white rounded-full w-[40%] h-[100%] '>subscribe</Button>    
<div className='flex  justify-between  space-x-12'>
   <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="10" fill="#1D1B22"/>
<path d="M32.9331 17.8371L30.2215 30.625C30.017 31.5275 29.4835 31.7521 28.7253 31.327L24.5937 28.2824L22.6002 30.1999C22.3796 30.4204 22.1951 30.605 21.7699 30.605L22.0667 26.3971L29.7242 19.4777C30.0571 19.1809 29.652 19.0164 29.2067 19.3133L19.7402 25.274L15.6648 23.9984C14.7783 23.7216 14.7623 23.1119 15.8493 22.6867L31.7899 16.5455C32.5279 16.2688 33.1738 16.7099 32.9331 17.8371Z" fill="#EDEDED"/>
</svg>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="10" fill="#1D1B22"/>
<path d="M14 22.8889H22.8889V14H14V22.8889ZM16.2222 16.2222H20.6667V20.6667H16.2222V16.2222ZM14 34H22.8889V25.1111H14V34ZM16.2222 27.3333H20.6667V31.7778H16.2222V27.3333ZM25.1111 14V22.8889H34V14H25.1111ZM31.7778 20.6667H27.3333V16.2222H31.7778V20.6667ZM31.7778 31.7778H34V34H31.7778V31.7778ZM25.1111 25.1111H27.3333V27.3333H25.1111V25.1111ZM27.3333 27.3333H29.5556V29.5556H27.3333V27.3333ZM25.1111 29.5556H27.3333V31.7778H25.1111V29.5556ZM27.3333 31.7778H29.5556V34H27.3333V31.7778ZM29.5556 29.5556H31.7778V31.7778H29.5556V29.5556ZM29.5556 25.1111H31.7778V27.3333H29.5556V25.1111ZM31.7778 27.3333H34V29.5556H31.7778V27.3333Z" fill="#EDEDED"/>
</svg>
</div>
    </div>
    </div>
    
   </div>
  );
}

export default ReferralInput;
