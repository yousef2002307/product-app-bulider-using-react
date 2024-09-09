import React from "react";
interface IProps {
srcimg:string,
altimg:string
}
export const Image= ({srcimg,altimg,classes} : IProps) => {
    return (
 <>
<img src={`${srcimg}`} alt={`${altimg}`} className={`${classes}`} />

 </>       

    )

}
export default Image