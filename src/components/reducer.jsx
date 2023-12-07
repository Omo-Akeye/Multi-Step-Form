

 export const initialState = {
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

export default function reducer(state,action) {
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