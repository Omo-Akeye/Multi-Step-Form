
export default function LogIn () {
  return (
    <div className="bg-custom-bg pb-10">
      <div className="w-[90%] m-[auto] bg-white py-8 px-5 mt-[-60px] rounded-lg drop-shadow-lg" >
        <div>
        <h1 className="text-4xl text-marine-blue font-bold">Personal info</h1>
        <p className="text-xl text-cool-gray py-4">Please provide name,email,address, and phone number</p>
        </div>
        <form action="">
       <div >
       <label htmlFor="name" className="text-2xl text-marine-blue ">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g stephen king" className="w-[100%] border text-xl p-3 custom-placeholder"/>
       </div>
       <div className="pt-6">
       <label htmlFor="email" className="text-2xl text-marine-blue ">Email</label>
        <input type="email" name="email" id="email" placeholder="e.g stephenking@gmail.com" className="w-[100%] border text-xl p-3 custom-placeholder" />
       </div>
        <div className="pt-6">
        <label htmlFor="number" className="text-2xl text-marine-blue">Phone Number</label>
        <input type="tel" name="number" id="number" placeholder="+234 8143353" className="w-[100%] border text-xl p-3 custom-placeholder  "/>
        </div>
  
        </form>
      </div>

      </div>

  )
}
