import React from 'react'


export default function MonthlyPlan({selectPlan,handleSelect}) {
  return (
      <div>
        <h1 className='text-4xl text-marine-blue font-bold'>Select your plan</h1>
        <p className='text-[18px] text-cool-gray py-4'>You have the option of choosing monthly or yearly billing.</p>
        <span className={`flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'arcade' ? 'border-marine-blue bg-custom-bg':''}`} onClick={()=> handleSelect('arcade')}>
          <img src="/assets/icon-arcade.svg" alt="" className='w-[50px]' />
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Arcade</h2>
            <h4 className='text-cool-gray text-[16px]'>$9/mo</h4>
          </div>
        </span>
        <span className={`mt-5 flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'advance' ? 'border-marine-blue bg-custom-bg':''}`} onClick={()=> handleSelect('advance')}>
          <img src="/assets/icon-advanced.svg" alt="" className='w-[50px]' />
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Advanced</h2>
            <h4 className='text-cool-gray text-[16px]'>$12/mo</h4>
          </div>
        </span>
        <span className={`mt-5 flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'pro' ? 'border-marine-blue bg-custom-bg':''}`} onClick={()=> handleSelect('pro')}>
          <img src="/assets/icon-pro.svg" alt="" className='w-[50px]'/>
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Pro</h2>
            <h4 className='text-cool-gray text-[16px]'>$15/mo</h4>
          </div>
        </span>

        <footer>
          <h2>Monthly</h2> <input type="checkbox" name="" id="" /> <h2>Yearly</h2>
        </footer>
      </div>
  )
}
        