import React from "react";
import { ReactNode } from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{

}
export const Input= ({...rest} : IProps) => {
    return (
 <>
 <input   {...rest} />
 
    


 </>       

    )

}
export default Input