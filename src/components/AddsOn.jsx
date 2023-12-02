
export default function AddsOn() {
  return (
    <>
   <div>
    <h1 className="text-4xl font-bold text-marine-blue mb-3">Pick add-ons</h1>
    <h3 className="text-cool-gray text-[18px]">Add-ons help enhance your gaming experience</h3>
     
     <span className="flex justify-between items-center p-3 border-[2px] border-purple-600 rounded-md mt-5 cursor-pointer">
     <div className="flex">
     <input type="checkbox" name="" id="" className="w-6 cursor-pointer"/>
      <div className="pl-8">
        <h2 className="text-marine-blue font-bold text-xl">Online service</h2>
        <p className="text-cool-gray font-bold">Access to multiplier games</p>
      </div>
     </div>
      <h4 className="text-purple-600 font-semibold">+$1/mo</h4>
     </span>

     <span className="flex justify-between items-center p-3 border-[2px] rounded-md mt-5 cursor-pointer">
      
      <div className="flex">
      <input type="checkbox" name="" id="" className="w-6 cursor-pointer" />
       <div className="pl-8">
       <h2 className="text-marine-blue font-bold text-xl">Larger storage</h2>
        <p className="text-cool-gray font-bold">Extra 1TB of cloud save</p>
       </div>
      </div>
      <h4 className="text-purple-600 font-semibold">+$2/mo</h4>
     </span>

     <span className="flex justify-between items-center p-3 border-[2px] rounded-md mt-5 cursor-pointer">
     
      <div className="flex">
      <input type="checkbox" name="" id=""  className="w-6 cursor-pointer"/>
        <div className="pl-8">
        <h2 className="text-marine-blue font-bold text-xl">Customizable profile</h2>
        <p className="text-cool-gray font-bold">Custom theme on your profile</p>
        </div>
      </div>
      <h4 className="text-purple-600 font-semibold">+$2/mo</h4>
     </span>
   </div>

    </>
  )
}
