import React from "react";
import { ReactNode } from "react";
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children :ReactNode,
className ?:string ,
width ?: "w-full" | "w-fit"

}
export const Button= ({children,className,width="w-full",...rest} : IProps) => {
    return (
 <>
<button className={`${className}`} width={width} {...rest}>{children}</button>
 </>       

    )

}
export default Button