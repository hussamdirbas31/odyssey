import React from 'react'

const ReferralHistory = () => {
  return (
    <div className=' flex flex-col gap-[32px]  text-white'>
      
      <div className='h-[36px]'>
      
      <select name="hell" id="cars" value="car" className='bg-purple-600 outline-none h-full w-[20%] flex justify-center'>
      <option className='flex justify-center' value="volvo">Volvo</option>
      </select>
      
      </div>
      
      
      <div className='h-[150px] flex flex-col justify-between'>
        <div className=' flex justify-between'>
        <div className=' hidden md:flex justify-between gap-[20rem]'>
        <p>Invitee</p>
        <p>Sign up</p>
        </div>
        <p>Task progress</p>
        </div>
        <p className='flex justify-center'>No records yet. Invite friends now!</p>
      </div>
      
    </div>
  )
}

export default ReferralHistory
