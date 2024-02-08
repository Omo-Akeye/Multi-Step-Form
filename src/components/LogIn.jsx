
export default function LogIn ({username,email, phone,errors,dispatch,handleSubmit}) {
   function handleChange(e) {
      const {name,value} = e.target;
      dispatch({type:'Input_Change', field:name,value})
    }
    return (
       <section>
       <div>
          <h1 className="text-4xl text-marine-blue font-bold">Personal info</h1>
          <p className="text-lg text-cool-gray py-4">Please provide name,email,address, and phone number</p>
          </div>
          <form onSubmit={handleSubmit}>
         <div className="relative">
          <p className="absolute right-[2%] text-red-500">{errors.username}</p>
         <label htmlFor="username" className="text-2xl text-marine-blue ">Name</label>
          <input type="text" value={username} onChange={handleChange} name="username" id="username" placeholder="e.g stephen king" className="w-[100%] border text-xl p-3 custom-placeholder"/>
         </div>
         <div className="pt-6 relative">
         <p className="absolute right-[2%] text-red-500">{errors.email}</p>
         <label htmlFor="email" className="text-2xl text-marine-blue ">Email</label>
          <input type="email" value={email} onChange={handleChange} name="email" id="email" placeholder="e.g stephenking@gmail.com" className="w-[100%] border text-xl p-3 custom-placeholder" />
         </div>
          <div className="pt-6 relative">
          
         <div className="flex space-justify-between align-middle">
         <label htmlFor="phone" className="text-2xl text-marine-blue">Phone Number</label>
          <p className="absolute right-[2%] text-red-500">{errors.phone}</p>
         </div>
          <input type="number" value={phone} onChange={handleChange} name="phone" id="phone" placeholder="+234 8143353" className="w-[100%] border text-xl p-3 custom-placeholder  "/>
          </div>
          </form>
       </section>
      
  
    )
  }
  