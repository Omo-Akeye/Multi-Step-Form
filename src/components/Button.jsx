 
 export default function Button({handleNextStep,}) {
    return (
    <>
     <div className="mt-4 relative">
     <button className="bg-marine-blue text-white p-4 font-bold absolute right-6" 
     onClick={() => {handleNextStep(); }}>Next Step</button>
   </div>
   </>
   )
    }
  