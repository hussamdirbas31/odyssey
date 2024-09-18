 import React from 'react'
 
 const Footer = () => {
   return (
     <div className=' h-[22rem] md:h-[15rem]  mt-14 px-[4%]'>
     
     <div className=' hidden  bg-black py-8 px-[8%] md:flex  md:justify-between xl:flex '>
     
     <div className=' flex flex-col gap-6'>
      <p className='text-2xl font-bold bg-gradient-to-r from-[#01CEDB] to-[#BE55F4] inline-block text-transparent bg-clip-text'>ODYSSEY</p>
      <span>
        <svg width="68" height="16" viewBox="0 0 68 16"  xmlns="http://www.w3.org/2000/svg">
<rect width="26" height="16" fill="#0A0A0A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2446 8.4632L6 1.94617H10.1541L13.3916 5.97414L16.8503 1.9643H19.1382L14.4978 7.35045L20 14.1962H15.8583L12.3528 9.84017L8.61027 14.1841H6.31001L11.2446 8.4632ZM16.462 12.9887L8.54716 3.15366H9.54996L17.4548 12.9887H16.462Z" fill="#A1A1A1"/>
<rect x="42" width="26" height="16" rx="8" fill="#0A0A0A"/>
<rect x="42" width="26" height="16" fill="#0A0A0A"/>
<path d="M62.1465 3.06971L59.9772 13.3C59.8136 14.0221 59.3868 14.2017 58.7802 13.8616L55.475 11.426L53.8802 12.9599C53.7037 13.1364 53.556 13.284 53.2159 13.284L53.4534 9.91771L59.5793 4.38218C59.8457 4.14474 59.5216 4.01314 59.1654 4.25061L51.5922 9.01918L48.3318 7.99874C47.6226 7.7773 47.6098 7.28952 48.4794 6.94939L61.232 2.03643C61.8224 1.81502 62.339 2.16796 62.1465 3.06971Z" fill="#A1A1A1"/>
</svg>

</span>
     </div>


     <div className='text-[#A1A1A1]'>
      <p>About Odyssey Exchange</p>
      <p>Risk warning</p>
      <p className='text-[#484848] mt-4'>Copyright © 2024 Odyssey.</p>
     </div>
     
     
     
     
     <div className='text-[#A1A1A1]'>
      <p>Privacy Policy</p>
      <p>User agreement</p>
     </div>
     
     
     
     
     
     
     <div className='text-[#A1A1A1]'>
      <p>Crypto Wiki</p>
     </div>
     </div>


     <div className=' md:hidden xl:hidden text-white p-4 flex flex-col justify-between gap-8 '>
      <h1 className='text-3xl font-bold bg-gradient-to-r from-[#01CEDB] to-[#BE55F4] inline-block text-transparent bg-clip-text uppercase w-full'>odyssey</h1>
      <p className=' text-[#EDEDED] text-xl '>About us</p>

      <span><svg width="328" height="25" viewBox="0 0 328 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_199_279)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.24463 13.3633L1 6.84628H5.15412L8.39159 10.8743L11.8503 6.86442H14.1382L9.49778 12.2506L15 19.0963H10.8583L7.35277 14.7403L3.61027 19.0842H1.31001L6.24463 13.3633ZM11.462 17.8888L3.54716 8.05377H4.54996L12.4548 17.8888H11.462Z" fill="#EDEDED"/>
</g>
<path d="M56.1465 7.52015L53.9772 17.7505C53.8136 18.4725 53.3868 18.6521 52.7802 18.3121L49.475 15.8764L47.8802 17.4103C47.7037 17.5868 47.556 17.7345 47.2159 17.7345L47.4534 14.3681L53.5793 8.83262C53.8457 8.59518 53.5216 8.46358 53.1654 8.70105L45.5922 13.4696L42.3318 12.4492C41.6226 12.2277 41.6098 11.74 42.4794 11.3998L55.232 6.48687C55.8224 6.26546 56.339 6.6184 56.1465 7.52015Z" fill="#EDEDED"/>
<defs>
<clipPath id="clip0_199_279">
<rect width="16" height="16" fill="white" transform="translate(0 4.90009)"/>
</clipPath>
</defs>
</svg>
</span>

<p className='text-[#A1A1A1] text-sm'>Copyright © 2024 Odyssey.</p>
     </div>
     </div>
   )
 }
 
 export default Footer
 