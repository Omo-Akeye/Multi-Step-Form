import React from 'react'
import NextButton from './NextButton'
import { useFormContext } from '../context/useFormContext';


export default function Button() {
  const {state,handlePrev } = useFormContext();
  return (
    <div className="flex justify-between mt-4" >
   { <button className={`text-xl text-cool-gray font-bold ${state.step === 1 ? 'invisible' : '' }`} 
        onClick={()=> handlePrev()}>Go Back</button>}
     <NextButton />
   </div>
  )
}
