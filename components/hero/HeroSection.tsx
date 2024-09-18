import React from 'react'
import ReferralInput from '../referralInput/ReferralInput'
import Image from 'next/image'
import img from '../../public/img.png'
import img2 from '../../public/img2.png'
const HeroSection = () => {
  return (
   <section className='  bg-black md:p-[8rem] relative  w-[100%] text-white grid grid-cols-1 md:flex   justify-center  items-center'>
   
   <div className=' hidden  absolute md:flex items-center justify-center w-[60%]'>
   <Image src={img} alt='hero' className=' absolute flex justify-center items-center ' />
   <Image src={img2} alt='hero' className=' z-20 absolute flex justify-center items-center h-[80rem]' /> 
   </div>
   
   <div className=' w-[100%]  relative md:bottom-5 md:flex justify-center items-center z-30   '>
   <h1 className=' text-2xl  md:text-5xl  p-4 font-bold uppercase  w-[100%]'>Invite friends to get 1,530 USDT each</h1>
   <ReferralInput/>
   </div>
   </section>
    )
}

export default HeroSection;