import React, { useState } from 'react'

export default function MonthlyPlan({selectPlan,handleSelect}) {
  const [isSelected,setIsSelected] = useState(false)
  function handleChange() {
    setIsSelected(!isSelected)
  }
  return (
      <div>
        <h1 className='text-4xl text-marine-blue font-bold'>Select your plan</h1>
        <p className='text-[18px] text-cool-gray py-4'>You have the option of choosing monthly or yearly billing.</p>
        <span className={`flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'arcade' ? 'border-purple-600 bg-custom-bg':''}`} onClick={()=> handleSelect('arcade')}>
          <img src="/assets/icon-arcade.svg" alt="" className='w-[50px]' />
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Arcade</h2>
            <h4 className='text-cool-gray text-[16px]'>{`${isSelected ? '$90/yr':'$9/mo'}`}</h4>
            {isSelected && <h3 className='text-marine-blue font-semibold'>2 months free</h3> }
          </div>
        </span>
        <span className={`mt-5 flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'advance' ? 'border-purple-600 bg-custom-bg':''}`} onClick={()=> handleSelect('advance')}>
          <img src="/assets/icon-advanced.svg" alt="" className='w-[50px]' />
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Advanced</h2>
            <h4 className='text-cool-gray text-[16px]'>{`${isSelected ? '$120/yr':'$12/mo'}`}</h4>
            {isSelected && <h3 className='text-marine-blue font-semibold'>2 months free</h3> }
          </div>
        </span>
        <span className={`mt-5 flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
        ${selectPlan === 'pro' ? 'border-purple-600 bg-custom-bg':''}`} onClick={()=> handleSelect('pro')}>
          <img src="/assets/icon-pro.svg" alt="" className='w-[50px]'/>
          <div className='pl-5'>
            <h2 className='text-xl text-marine-blue font-bold'>Pro</h2>
            <h4 className='text-cool-gray text-[16px]'>{`${isSelected ? '$150/yr':'$15/mo'}`}</h4>
             {isSelected && <h3 className='text-marine-blue font-semibold'>2 months free</h3> }
          </div>
        </span>

        <footer className='flex justify-center text-center mt-7 bg-custom-bg p-5 rounded-md'>
          <h2  className='font-bold text-marine-blue text-[18px]'>Monthly</h2>
          <div  onClick={()=> handleChange()}  
          className={`flex w-14 h-7 bg-marine-blue mx-6 rounded-full transition-all duration-500 cursor-pointer 
          ${isSelected ? 'bg-marine-blue' : ''}`}   >
            <span className={`mt-[3px] ml-1 h-5 w-5 bg-white rounded-full ${isSelected ? 'ml-8' : ''}`} ></span>
          </div>
          <h2 className={`font-bold text-cool-gray text-[18px]`}>Yearly</h2>
        </footer>
      </div>
  )
}
        