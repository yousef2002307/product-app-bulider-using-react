import React from "react";
interface IProps {
message :string
}
export const Error= ({message} : IProps) => {
    return (
 <>
{message && <span className="block font-semibold text-sm text-red-500">{message}</span>}
 </>       

    )

}
export default Error