// import { useReducer } from "react";
// import Header from "./Header"
// import LogIn from "./LogIn"
// import Button from "./Button";
// import MonthlyPlan from "./MonthlyPlan";

// const initialState = {
//   username: '',
//   phone:'',
//   email:'',
//   isValid : false,
//   errors :{
//     username :'',
//     email : '',
//     phone : ''
//   },
//   step:1
// }
// function reducer(state,action) {
//   switch (action.type) {
//     case 'Input_Change':
//       return {
//         ...state,[action.field] : action.value,
//       }
//       case 'NEXT_STEP' :
//       return { 
//         ...state,
//         isValid: isFormValid(),
//         errors : {
//           ...state.errors , [action.field]: action.value.trim() === '' ? 'This field is required' : ''
//         },
//         step: isValid ? state.step + 1 : state.step
//       }
//     default:
//       return state;
//   }
// }
// function isFormValid () {
//   return username.trim() !== '' && email.trim() !== '' && phone.trim() !== '';
// };

// function App() {
  

  
//   function handleChange(e) {
//     const {name,value} = e.target;
//     dispatch({type:'Input_Change', field:name,value})
//   }
  
//   const [state,dispatch] = useReducer(reducer,initialState)
//   const {username,email,phone,isValid,errors,step} = state

//   return (
//     <div className="font-custom  ">
//     <Header/>

//     {state.step ===1 && 
//    ( <LogIn username={username} email={email} phone={phone} errors={errors} handleChange={handleChange}/>)}

//     {state.step === 2 && (
//      <MonthlyPlan/>
// )}
//     <Button step={step} dispatch={dispatch} isValid={isValid}/>
//     </div>
//   )
// }

// export default App
