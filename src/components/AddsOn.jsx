
import React from 'react';

export default function AddsOn({ selectedAddOns,dispatch,isSelected,addOns}) {
  function handleAddOnClick (addOnId) {
    dispatch({ type: 'TOGGLE_ADDON', payload: addOnId });
  };
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-marine-blue mb-3">Pick add-ons</h1>
        <h3 className="text-cool-gray text-lg">Add-ons help enhance your gaming experience</h3>

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
                <h2 className="text-marine-blue font-bold text-xl">{addOn.name}</h2>
                <p className="text-cool-gray font-bold text-sm">{addOn.description}</p>
              </div>
            </div>
            <h4 className="text-purple-600 font-semibold">{isSelected ? addOn.YearlyPrice : addOn.MonthlyPrice}</h4>
          </span>
        ))}
      </div>
    </>
  );
}