import { createContext, useContext, useReducer } from "react";
import MonthlyPlan from "./components/MonthlyPlan";
import LogIn from "./components/LogIn";
import Header from "./components/Header"
import AddsOn from "./components/AddsOn";
import FinishUp from "./components/FinishUp";
import Thankyou from "./components/Thankyou";
import reducer from './components/reducer'
import { initialState } from "./components/reducer";
import { plans,addOns } from "./components/data";
import NextButton from "./components/NextButton";
import Button from "./components/Button";


const FormContext = createContext()
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
     <FormContext.Provider value={{ state, dispatch, plans, addOns, 
      handleNextStep,handlePrev,handleSubmit,selectedPlan}}>

    <div className="font-custom bg-white md:grid md:grid-cols-[1.2fr,3fr] lg:w-[80%] md:m-auto md:p-3 md:mt-10">
   <div>
     <Header />
   </div>
    
    <section>
    <div className=" pb-10">
        <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg md:mt-[auto]">
  {state.step ===1 && 
   ( <LogIn  />)}

    {state.step === 2 && (
     <MonthlyPlan />
)}
    {state.step === 3 && (
     <AddsOn />
)}  {state.step === 4 && (<FinishUp />)}
    {state.step === 5 && (<Thankyou/>)}

    {step !== 5 &&  <Button/> }
      </div>                   
   </div>

  
    </section>

    </div>
    </FormContext.Provider>
    </>
  )
}
export function useFormContext() {
  return useContext(FormContext);
}
export default App