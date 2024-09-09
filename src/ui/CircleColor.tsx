import React from "react";
interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
color : string
}
/**
 * A React functional component that renders a colored circle.
 *
 * @param {IProps} props - An object containing the color of the circle.
 * @param {string} props.color - A string representing the color of the circle.
 * @return {JSX.Element} - A React element representing a colored circle.
 */
export const CircleColor= ({color,...rest} : IProps) => {
    return (
 <>
 
<span className={`cursor-pointer w-5 h-5 block rounded-full`} style={{backgroundColor:color}} {...rest}></span>
 </>       

    )

}
export default CircleColor