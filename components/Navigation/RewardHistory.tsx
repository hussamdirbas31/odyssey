import React from 'react'
import Button from '../Button/Button'
const RewardHistory = () => {
  return (
    <div className=' flex flex-col gap-[32px] h-[276px] text-white'>
      
    <div className='h-[36px]   flex flex-row items-center gap-[10px]  border-b'>
    <Button className=' h-full outline-none  p-[1%] border-b-2 border-b-purple-900 z-10   '>Coupons</Button>
    <Button className=' h-full  outline-none p-[1%] border-b-2 border-b-purple-900 z-10'>Mystery Boxes</Button>
    </div>
    
    <div className='h-[36px] '>
    <select name="hell" id="cars" value="car" className='bg-purple-600 outline-none h-full w-[20%] flex justify-center'>
  <option className='flex justify-center' value="volvo">Volvo</option>
</select>
    </div>
    
    <div className='h-[150px] flex flex-col justify-between'>
      <div className=' hidden md:flex justify-between px-6'>
      <p>Type</p>
      <p>Amount</p>
      <p>Distribution time</p>
      <p>Status</p>
      </div>
      <p className='flex justify-center'>No records yet. Invite friends now!</p>
    </div>
    
  </div>

  )
}

export default RewardHistory
