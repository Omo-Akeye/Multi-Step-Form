
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validatePhone = (phone) => {
  const regex = /^\+?[0-9]{1,3}-?[0-9]{3,14}$/;
  return regex.test(phone);
};


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
          const isValid = isFormValid(state);
          let emailError = '';
          let phoneError = '';
          if (state.email.trim() === '') {
            emailError = 'Email is required';
          } else if (!validateEmail(state.email)) {
            emailError = 'Invalid email format';
          }
          if (state.phone.trim() === '') {
            phoneError = 'Phone is required';
          } else if (!validatePhone(state.phone)) {
            phoneError = 'Invalid phone format';
          }
        return { 
          ...state,
        isValid,
        errors: {
          ...state.errors,
          username: state.username.trim() === '' ? 'Name is required' : '',
          email: emailError,
          phone: phoneError,
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
    return username.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && validateEmail(email) && validatePhone(phone);
  };