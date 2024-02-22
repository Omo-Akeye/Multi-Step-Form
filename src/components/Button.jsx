import { useFormContext } from '../App';

 
 export default function Button() {
  const {state,handleNextStep } = useFormContext();
    return (
    <>
     <div className="">
     <button className="bg-marine-blue text-white p-3 font-bold" 
     onClick={() => {handleNextStep(); }}>{state.step=== 4 ? 'Confirm':'Next Step'}</button>
   </div>
   </>
   )
    }
  