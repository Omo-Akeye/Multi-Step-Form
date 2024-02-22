
import React from 'react';
import { useFormContext } from '../context/useFormContext';


export default function AddsOn() {
  const { dispatch, state, addOns } = useFormContext();
  const {isSelected,selectedAddOns} = state
  function handleAddOnClick (addOnId) {
    dispatch({ type: 'TOGGLE_ADDON', payload: addOnId });
  };
  return (
    <>
      <div>
        <h1 className="mb-3 text-4xl font-bold text-marine-blue">Pick add-ons</h1>
        <h3 className="text-lg text-cool-gray">Add-ons help enhance your gaming experience</h3>

        {addOns.map((addOn) => (
          <span
            key={addOn.id}
            className={`flex justify-between items-center p-3 border-[2px] rounded-md mt-5 cursor-pointer ${
              selectedAddOns.includes(addOn.id) ? 'bg-blue-200 border-blue-500' : ''
            }`}
            onClick={() => handleAddOnClick(addOn.id)}
            
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`addon-${addOn.id}`}
                className="w-6 cursor-pointer"
                checked={selectedAddOns.includes(addOn.id)}
                onChange={() => handleAddOnClick(addOn.id)} 
              />
              <div className="pl-3">
                <h2 className="text-xl font-bold text-marine-blue">{addOn.name}</h2>
                <p className="text-sm font-bold text-cool-gray">{addOn.description}</p>
              </div>
            </div>
            <h4 className="font-semibold text-purple-600">{isSelected ? addOn.YearlyPrice : addOn.MonthlyPrice}</h4>
          </span>
        ))}
      </div>
    </>
  );
}