 
 export default function Button({handleNextStep,step}) {
    return (
    <>
     <div className="">
     <button className="bg-marine-blue text-white p-3 font-bold" 
     onClick={() => {handleNextStep(); }}>{step=== 4 ? 'Confirm':'Next Step'}</button>
   </div>
   </>
   )
    }
  