import { useReducer } from "react";
import MonthlyPlan from "./MonthlyPlan";
import Button from "./Button";
import LogIn from "./LogIn";
import Header from "./Header"
import AddsOn from "./AddsOn";
import FinishUp from "./FinishUp";



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
      case 'CHANGE' :
        return {
          ...state, step : state.step - 2
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
const addOns = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    MonthlyPrice: '$1/mo',
    YearlyPrice : '$10/yr'
  },
  {
    id: 2,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    MonthlyPrice: '$2/mo',
    YearlyPrice : '$20/yr'
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    MonthlyPrice: '$2/mo',
    YearlyPrice : '$20/yr'
  },
];


const plans = [
  {
    id: 'arcade',
    name: 'Arcade',
    image: '/assets/icon-arcade.svg',
    price: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    freeMonths: 2,
  },
  {
    id: 'advance',
    name: 'Advanced',
    image: '/assets/icon-advanced.svg',
    price: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    freeMonths: 2,
  },
  {
    id: 'pro',
    name: 'Pro',
    image: '/assets/icon-pro.svg',
    price: {
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
    freeMonths: 2,
  },
];


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
  function handleChangeUp (){
    dispatch({type: 'CHANGE'})
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  const {username,email,phone,isValid,errors,step,selectPlan,isSelected,selectedAddOns} = state;

  const selectedPlan = plans.find((plan) => plan.id === selectPlan);

  
  return (
    <div className="font-custom  ">
    <Header currentStep={state.step}/>

   <div className="bg-custom-bg pb-10">
        <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg">
   {state.step ===1 && 
   ( <LogIn username={username} email={email} phone={phone} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>)}

    {state.step === 2 && (
     <MonthlyPlan handleSelect = {handleSelect} handleSwitch={handleSwitch} isSelected={isSelected} selectPlan={selectPlan} plans={plans}/>
)}
    {state.step === 3 && (
     <AddsOn selectedAddOns={selectedAddOns} handleAddOnClick={handleAddOnClick} isSelected={isSelected} addOns={addOns}/>
)}  {state.step === 4 && (<FinishUp selectedAddOns={selectedAddOns} addOns={addOns} isSelected={isSelected} selectedPlan={selectedPlan} handleChangeUp={handleChangeUp}/>)}
      </div>
   </div>
   <div className="flex justify-between px-5 py-3" >
   { state.step > 1 && <button className="text-xl text-cool-gray font-bold" onClick={()=> handlePrev()}>Go Back</button>}
    <Button step={step} handleNextStep={handleNextStep} />
   </div>
    </div>
  )
}



 
export default App
