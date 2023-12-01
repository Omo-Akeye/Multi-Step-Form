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
    selectPlan : 'arcade',
  },
  step:1
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
      case 'SELECT_PLAN': 
      return {
        ...state, selectPlan:action.payload
      }
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
  function handleSelect (plan){
    dispatch({type:'SELECT_PLAN', payload: plan})
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  const {username,email,phone,isValid,errors,step,selectPlan} = state
  
  return (
    <div className="font-custom  ">
    <Header currentStep={state.step}/>

   <div className="bg-custom-bg pb-10">
        <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg">
   {state.step ===1 && 
   ( <LogIn username={username} email={email} phone={phone} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>)}

    {state.step === 2 && (
     <MonthlyPlan handleSelect = {handleSelect} selectPlan={selectPlan}/>
)}
    {state.step === 3 && (
     <AddsOn/>
)}
      </div>
   </div>

   
    <Button step={step} handleNextStep={handleNextStep} isValid={isValid}/>
    </div>
  )
}



 
export default App
