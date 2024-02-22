
import React from 'react';
import { useFormContext } from '../context/useFormContext';



function FinishUp() {
  const {dispatch,addOns,selectedPlan,state } = useFormContext();
  const {isSelected,selectedAddOns} = state
  const calculateTotalPrice = () => {
    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
      const selectedAddOn = addOns.find((addOn) => addOn.id === addOnId);
      const price = isSelected ? selectedAddOn.YearlyPrice : selectedAddOn.MonthlyPrice;
      return total + parseFloat(price.replace('$', '').replace('/mo', '').replace('/yr', ''));
    }, 0);
    const planPrice = isSelected ? selectedPlan.price.yearly : selectedPlan.price.monthly;
    const total = addOnsTotal + parseFloat(planPrice.replace('$', '').replace('/mo', '').replace('/yr', ''));
    return total;
  };
  function handleChangeUp (){
    dispatch({type: 'CHANGE'})
  }
  return (
    <div>
       <h1 className="mb-3 text-4xl font-bold text-marine-blue">Finishing up</h1>
        <h3 className="text-lg text-cool-gray">Double-check everything looks OK before confirming</h3>
     <div className='p-5 mt-3 rounded-md bg-custom-bg'>
        <div className='flex justify-between'>
          <span>
          <p className='text-base font-black text-marine-blue'>{selectedPlan.name}  ({isSelected ? 'Yearly' : 'Monthly'})</p>
          <a href="#" onClick={()=> handleChangeUp()} className='text-base text-cool-gray decoration-solid '>Change</a>
          </span>
          <p className='text-base font-black text-marine-blue'>{isSelected ? selectedPlan.price.yearly : selectedPlan.price.monthly}</p>
        </div>
        <hr className='mt-3' />
      <ul>
        {selectedAddOns.map((addOnId) => {
          const selectedAddOn = addOns.find((addOn) => addOn.id === addOnId);
          return (
            <li key={selectedAddOn.id} className='flex justify-between pt-3'>
              <strong>{selectedAddOn.name}</strong> 
               <span className='font-bold text-cool-gray'>{selectedAddOn.price} {isSelected ? selectedAddOn.YearlyPrice : selectedAddOn.MonthlyPrice}</span>
            </li>
          );
        })}
      </ul>
     </div>
      <p className='flex justify-between p-5 text-lg font-bold text-cool-gray'>Total per ({isSelected ? 'Year' : 'Month'}) 
      <span className='text-purple-blue'>+${calculateTotalPrice().toFixed(2)}/{isSelected ? 'Year' : 'Month'}</span></p>

    
    </div>
  );
}

export default FinishUp;
