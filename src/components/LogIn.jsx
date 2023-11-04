import { useReducer } from "react"

export default function LogIn () {
  const initialState = {
    username: '',
    phone:'',
    email:'',
    isValid : false,
    errors :{
      username :'',
      email : '',
      phone : ''
    }
  }

  function handleChange(e) {
    const {name,value} = e.target;
    dispatch({type:'Input_Change', field:name,value})
  }

  function reducer(state,action) {
    switch (action.type) {
      case 'Input_Change':
        return {
          ...state,[action.field] : action.value,
          errors : {
            ...state.errors , [action.field]: action.value.trim() === '' ? 'This field is required' : ''
          }
        }
      default:
        return state;
    }
  }
  const [{username,email,phone,isValid,errors},dispatch] = useReducer(reducer,initialState)

  
  return (
    <div className="bg-custom-bg pb-10">
      <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg" >
        <div>
        <h1 className="text-4xl text-marine-blue font-bold">Personal info</h1>
        <p className="text-xl text-cool-gray py-4">Please provide name,email,address, and phone number</p>
        </div>
        <form >
       <div >
        <p>{errors.username}</p>
       <label htmlFor="username" className="text-2xl text-marine-blue ">Name</label>
        <input type="text" value={username} onChange={handleChange} name="username"  placeholder="e.g stephen king" className="w-[100%] border text-xl p-3 custom-placeholder"/>
       </div>
       <div className="pt-6">
       <p>{errors.email}</p>
       <label htmlFor="email" className="text-2xl text-marine-blue ">Email</label>
        <input type="email" value={email} onChange={handleChange} name="email"  placeholder="e.g stephenking@gmail.com" className="w-[100%] border text-xl p-3 custom-placeholder" />
       </div>
        <div className="pt-6">
        
       <div className="flex space-justify-between align-middle">
       <label htmlFor="phone" className="text-2xl text-marine-blue">Phone Number</label> <p>{errors.phone}</p>
       </div>
        <input type="tel" value={phone} onChange={handleChange} name="phone" placeholder="+234 8143353" className="w-[100%] border text-xl p-3 custom-placeholder  "/>
        </div>
  
        </form>
      </div>

      </div>

  )
}
