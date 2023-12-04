import { useReducer } from "react";
import MonthlyPlan from "./MonthlyPlan";
import Button from "./Button";
import LogIn from "./LogIn";
import Header from "./Header"
import AddsOn from "./AddsOn";



const initialState = {
  username: '',
  phone:'',
  email:'',
  isValid : false,
  errors :{
    username :'',
    email : '',
    phone : '',
  },
  selectPlan : 'arcade',
  isSelected: false,
  step:1,
  selectedAddOns: []
}
function reducer(state,action) {
  switch (action.type) {
    case 'Input_Change':
      return {
        ...state,[action.field] : action.value,
        errors : {
          ...state.errors , [action.field]: action.value.trim() === '' ? 'This field is required' : ''
        },
      }
      case 'NEXT_STEP' :
        const isValid= isFormValid(state);
      return { 
        ...state,
      isValid,
      errors: {
        ...state.errors,
        username: state.username.trim() === '' ? 'Name is required' : '',
        email: state.email.trim() === '' ? 'Email is required' : '',
        phone: state.phone.trim() === '' ? 'Phone is required' : '',
      },
        step: isValid ? state.step + 1 : state.step
      }  
      case 'GO_BACK' :
        return {
          ...state, step : state.step - 1
        }
      case 'SELECT_PLAN': 
      return {
        ...state, selectPlan :action.payload
      }
      case 'SWITCH_PLAN' : 
      return {
        ...state, isSelected: !state.isSelected
      }
      case 'TOGGLE_ADDON':
        return {
          ...state,selectedAddOns: state.selectedAddOns.includes(action.payload)
            ? state.selectedAddOns.filter((id) => id !== action.payload)
            : [...state.selectedAddOns, action.payload],
        };
    default:
      return state;
  }
}
function isFormValid ({username,email,phone}) {
  return username.trim() !== '' && email.trim() !== '' && phone.trim() !== '';
};


function App() {
  
  
  function handleChange(e) {
    const {name,value} = e.target;
    dispatch({type:'Input_Change', field:name,value})
  }
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
  function handleSelect (plan){
    dispatch({type:'SELECT_PLAN', payload: plan})
  }
  function handleSwitch (){
    dispatch({type:'SWITCH_PLAN'})
  }
  function handleAddOnClick (addOnId) {
    dispatch({ type: 'TOGGLE_ADDON', payload: addOnId });
  };
  
  const [state,dispatch] = useReducer(reducer,initialState)
  const {username,email,phone,isValid,errors,step,selectPlan,isSelected,selectedAddOns} = state
  
  return (
    <div className="font-custom  ">
    <Header currentStep={state.step}/>

   <div className="bg-custom-bg pb-10">
        <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg">
   {state.step ===1 && 
   ( <LogIn username={username} email={email} phone={phone} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>)}

    {state.step === 2 && (
     <MonthlyPlan handleSelect = {handleSelect} handleSwitch={handleSwitch} isSelected={isSelected} selectPlan={selectPlan}/>
)}
    {state.step === 3 && (
     <AddsOn selectedAddOns={selectedAddOns} handleAddOnClick={handleAddOnClick} isSelected={isSelected}/>
)}
      </div>
   </div>
   <div className="flex justify-between px-5 py-3" >
   { state.step > 1 && <button className="text-xl text-cool-gray font-bold" onClick={()=> handlePrev()}>Go Back</button>}
    <Button step={step} handleNextStep={handleNextStep} isValid={isValid}/>
   </div>
    </div>
  )
}



 
export default App
