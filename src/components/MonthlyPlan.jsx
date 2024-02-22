import React from 'react';
import { useFormContext } from '../context/useFormContext';



export default function MonthlyPlan() {
  const { dispatch,state,plans } = useFormContext();
  const {isSelected,selectPlan} = state
  function handleSelect (plan){
    dispatch({type:'SELECT_PLAN', payload: plan})
  }
  function handleSwitch (){
    dispatch({type:'SWITCH_PLAN'})
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-marine-blue">Select your plan</h1>
      <p className="text-[18px] text-cool-gray py-4">
        You have the option of choosing monthly or yearly billing.
      </p>
      {plans.map((plan) => (
        <span
          key={plan.id}
          className={`mt-5 flex py-4 pl-4 border-solid border-[2px] border-light-gray rounded-md cursor-pointer 
            ${selectPlan === plan.id ? 'border-purple-600 bg-custom-bg' : ''}`}
          onClick={() => handleSelect(plan.id)}
        >
          <img src={plan.image} alt="" className="w-[50px]" />
          <div className="pl-5">
            <h2 className="text-xl font-bold text-marine-blue">{plan.name}</h2>
            <h4 className="text-cool-gray text-[16px]">
              {`${isSelected ? plan.price.yearly : plan.price.monthly}`}
            </h4>
            {isSelected && <h3 className="font-semibold text-marine-blue">{`${plan.freeMonths} months free`}</h3>}
          </div>
        </span>
      ))}

      <footer className="flex justify-center p-5 text-center rounded-md mt-7 bg-custom-bg"> 
        <h2 className="font-bold text-marine-blue text-[18px]">Monthly</h2>
        <div
          onClick={() => handleSwitch()}
          className={`flex w-14 h-7 bg-marine-blue mx-6 rounded-full transition-all duration-500 cursor-pointer 
          ${isSelected ? 'bg-marine-blue' : ''}`}
        >
          <span className={`mt-[3px] ml-1 h-5 w-5 bg-white rounded-full ${isSelected ? 'ml-8' : ''}`}></span>
        </div>
        <h2 className={`font-bold text-cool-gray text-[18px]`}>Yearly</h2>
      </footer>
    </div>
  );
}