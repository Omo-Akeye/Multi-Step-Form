 
 export default function Button({handleNextStep}) {
    return (
    <>
     <div className="">
     <button className="bg-marine-blue text-white p-3 font-bold" 
     onClick={() => {handleNextStep(); }}>Next Step</button>
   </div>
   </>
   )
    }
  