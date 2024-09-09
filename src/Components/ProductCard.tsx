import React from "react";
import Image from "./Image";
import Button from "../ui/Button";
import { IProduct } from "../Interface";
import { txtslicer } from "../functions";
import toast, { Toaster } from 'react-hot-toast';
interface IProps {
product : IProduct,
setProducttoedit : (product : IProduct) => void,
setProducttoremove:(product : IProduct) => void,
openedit : () => void,
openremove : () => void
}
export const ProductCard= ({product,setProducttoedit, setProducttoremove,openedit,openremove} : IProps) => {
  const editproduct = () => {
    setProducttoedit(product)
    openedit()
  }
  const removeproduct= () => {
    setProducttoremove(product)
    openremove()
 
  }
    return (
 <>
 <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 rounded-lg shadow-lg  bg-white border border-gray-200 p-2 flex flex-col">
    <Image srcimg={`${product.url}`} altimg="product" classes=" "/>

<h2>{product.title}</h2>
<p>
    {txtslicer(product.description)}

</p>

<div className="flex space-x-2 mt-3">
    {product.colors.map(el => {
        return (
         
            <span key={el} className="w-5 h-5  rounded-full" style={{backgroundColor:el}}></span>




        )
    })}
    </div>

<div className="flex items-center justify-between my-4">
    <div>
    <span className="font-semibold text-indigo-500">{product.price}$</span>
    </div>
    <div>
    <div className="flex items-center justify-between">
        <span className="font-semibold text-black inline-block text-sm mr-2">{product.catagory.name}</span>
    <Image srcimg={`${product.catagory.imageUrl}`} altimg="product" classes=" w-7 h-7 rounded-full "/>
    </div>
  </div>

</div>
<div className="flex items-center justify-between space-x-2">
<Button className="bg-indigo-500 hover:bg-blue-600 text-white p-2 w-full rounded-md" onClick={editproduct}>edit</Button>
<Button className="bg-red-700 hover:bg-red-900 text-white p-2 w-full rounded-md" onClick={removeproduct}>delete</Button>

</div>
</div>
 </>       

    )

}
export default ProductCard