
import React from 'react';

function FinishUp({ selectedAddOns, addOns,isSelected,selectedPlan,dispatch}) {
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
       <h1 className="text-4xl font-bold text-marine-blue mb-3">Finishing up</h1>
        <h3 className="text-cool-gray text-lg">Double-check everything looks OK before confirming</h3>
     <div className='bg-custom-bg p-5 rounded-md mt-3'>
     {/* {selectedPlan && ( */}
        <div className='flex justify-between'>
          <span>
          <p className='text-marine-blue font-black text-base'>{selectedPlan.name}  ({isSelected ? 'Yearly' : 'Monthly'})</p>
          <a href="#" onClick={()=> handleChangeUp()} className='text-cool-gray text-base  decoration-solid'>Change</a>
          </span>
          <p className='text-marine-blue text-base font-black'>{isSelected ? selectedPlan.price.yearly : selectedPlan.price.monthly}</p>
        </div>
        <hr className='mt-3' />
      {/* // )} */}
      <ul>
        {selectedAddOns.map((addOnId) => {
          const selectedAddOn = addOns.find((addOn) => addOn.id === addOnId);
          return (
            <li key={selectedAddOn.id} className='flex justify-between pt-3'>
              <strong>{selectedAddOn.name}</strong> 
               <span className='text-cool-gray font-bold'>{selectedAddOn.price} {isSelected ? selectedAddOn.YearlyPrice : selectedAddOn.MonthlyPrice}</span>
            </li>
          );
        })}
      </ul>
     </div>
      <p className='text-cool-gray font-bold p-5 flex justify-between text-lg'>Total per ({isSelected ? 'Year' : 'Month'}) 
      <span className='text-purple-blue'>+${calculateTotalPrice().toFixed(2)}/{isSelected ? 'Year' : 'Month'}</span></p>

    
    </div>
  );
}

export default FinishUp;
