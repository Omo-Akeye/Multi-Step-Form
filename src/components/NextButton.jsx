import { useFormContext } from "../context/useFormContext";


 
 export default function NextButton() {
  const {state,handleNextStep } = useFormContext();
    return (
    <>
     <div className="">
     <button className="p-3 font-bold text-white bg-marine-blue" 
     onClick={() => {handleNextStep(); }}>{state.step=== 4 ? 'Confirm':'Next Step'}</button>
   </div>
   </>
   )
    }
  