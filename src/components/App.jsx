import { useReducer } from "react";
import MonthlyPlan from "./MonthlyPlan";
import Button from "./Button";
import LogIn from "./LogIn";
import Header from "./Header"
import AddsOn from "./AddsOn";
import FinishUp from "./FinishUp";
import Thankyou from "./Thankyou";
import reducer from './reducer'
import { initialState } from "./reducer";
import { plans,addOns } from "./data";


function App() {
  
  function handleSubmit(e) {
    e.preventDefault();
    handleNextStep();
  }
  function handleNextStep() {
    dispatch({ type: 'NEXT_STEP' });
  }
  function handlePrev() {
    dispatch({type:'GO_BACK'})
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  const {username,email,phone,isValid,errors,step,selectPlan,isSelected,selectedAddOns} = state;

  const selectedPlan = plans.find((plan) => plan.id === selectPlan);
  
  return (
    <>
    <div className="font-custom bg-white md:grid md:grid-cols-[1fr,3fr] md:w-[80%] md:m-auto md:p-3 md:mt-10 ">
   <div>
     <Header currentStep={state.step}/>
   </div>
    
    <section>
    <div className=" pb-10">
        <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg md:mt-[auto]">
   {state.step ===1 && 
   ( <LogIn username={username} email={email} phone={phone} errors={errors} dispatch={dispatch} handleSubmit={handleSubmit}/>)}

    {state.step === 2 && (
     <MonthlyPlan dispatch={dispatch}  isSelected={isSelected} selectPlan={selectPlan} plans={plans}/>
)}
    {state.step === 3 && (
     <AddsOn selectedAddOns={selectedAddOns} dispatch={dispatch} isSelected={isSelected} addOns={addOns}/>
)}  {state.step === 4 && (<FinishUp selectedAddOns={selectedAddOns} dispatch={dispatch}
           addOns={addOns} isSelected={isSelected} selectedPlan={selectedPlan} />)}
    {state.step === 5 && (<Thankyou/>)}
      </div>
   </div>

   {state.step !== 5 && (<div className="flex justify-between px-5 py-3" >
   { <button className={`text-xl text-cool-gray font-bold ${state.step === 1 ? 'invisible' : '' }`} onClick={()=> handlePrev()}>Go Back</button>}
    <Button step={step} handleNextStep={handleNextStep} />
   </div>)}
    </section>

    </div>

    </>
  )
}

export default App
