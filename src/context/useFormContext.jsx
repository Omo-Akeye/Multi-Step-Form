import { useContext } from "react";
import { FormContext } from "../App";


export function useFormContext() {
  return useContext(FormContext);
}
