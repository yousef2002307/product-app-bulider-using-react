import React, { useState,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './Components/ProductCard'
import {catagories, productlist} from './data';
import Modal from './ui/Modal';
import './App.css'
import { Button } from '@headlessui/react';
import { formdata, colors } from './data';
import Input from './ui/Input';
import { IProduct } from './Interface';
import { validationerrorsProduct } from './Validation';
import Error from './Components/Error';
import CircleColor from './ui/CircleColor';
import Select from './ui/Select';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  /* state(useState) */
  let [isOpen, setIsOpen] = useState(false)
  let [iseditOpen, seteditIsOpen] = useState(false)
  let [isremoveOpen, setremoveIsOpen] = useState(false)
  const [errorform, seterrorform] = useState({
    title : '',
    description : '',
    url : '',
    price : '',
    colors : '',
    catagory : ''
  });
  const [product, setProduct] = useState<IProduct>({
    title : "",
    description : "",
    url : "",
    price : "",
    colors : [],
    catagory : {
      name : "",
      imageUrl : ""
    }
  })
  const [producttoedit,setProducttoedit] = useState<IProduct>({
    title : "",
    description : "",
    url : "",
    price : "",
    colors : [],
    catagory : {
      name : "",
      imageUrl : ""
    }
  });
  const [  Producttoremove,setProducttoremove] = useState<IProduct>({
    title : "",
    description : "",
    url : "",
    price : "",
    colors : [],
    catagory : {
      name : "",
      imageUrl : ""
    }
  });
const [products,setproducts ]= useState<IProduct[]>(productlist);
  const [tempcolors,settempcolors] = useState<string[]>([]);
  const [tempcolors2,settempcolors2] = useState<string[]>([]);
  const [selected,setSelected] = useState(catagories[0]);
  const [col,setcol] = useState(false);

  /*handler */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function openedit() {
    seteditIsOpen(true)
  }

  function closeedit() {
    seteditIsOpen(false)
  }
  function openremove() {
    setProducttoedit(product)
    setremoveIsOpen(true)
  }

  function closeremove() {
    setremoveIsOpen(false)
  }
function eventhandler(event:React.ChangeEvent<HTMLInputElement>) {
  const { value, name } = event.target;
setProduct({...product,[name]:value});

seterrorform({
  ...errorform,
  [name]:''});

}

function eventedithandler(event:React.ChangeEvent<HTMLInputElement>) {
  const { value, name } = event.target;
setProducttoedit({...producttoedit,[name]:value});

seterrorform({
  ...errorform,
  [name]:''});

}


function submithandler(event:React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log('sdsddsdssdds');
  console.log(product);
  let errors = validationerrorsProduct({title : product.title,description : product.description,url : product.url,price : product.price,colors : tempcolors,catagory : selected});
let hasErrors = Object.values(errors).some(ele => ele === '') && Object.values(errors).every(ele => ele === '');
console.log("errors",errors);
console.log(hasErrors,'hasErrors');
if(!hasErrors){
  seterrorform(errors);
  setcol(true);
  return;
}
console.log(product)
 setproducts((prev) => [{...product,id : Date.now(),colors : tempcolors,catagory : selected},...prev]);// 
 setProduct({
  title : "",
  description : "",
  url : "",
  price : "",
  colors : [],
  catagory : {
    name : "",
    imageUrl : ""
  }
 })
 settempcolors([]);
 close();
}
console.log(producttoedit,'producttoedit')


//submit ahndler for edit
function submitedithandler(event:React.FormEvent<HTMLFormElement>) {

 
  event.preventDefault();
  let index = 0;
  products.filter((ele,ind) =>{
     if(ele.id === producttoedit.id){
     index =  ind
     }
    
});


  let errors = validationerrorsProduct({title : producttoedit.title,description : producttoedit.description,url : producttoedit.url,price : producttoedit.price,colors : tempcolors,catagory : selected});
let hasErrors = Object.values(errors).some(ele => ele === '') && Object.values(errors).every(ele => ele === '');
console.log("errors",errors);
console.log(hasErrors,'hasErrors');
if(!hasErrors){
  seterrorform(errors);
  setcol(true);
  return;
}

let productsondx = [...products];
productsondx[index] = producttoedit;
setproducts(productsondx);
 
 setProducttoedit({
  title : "",
  description : "",
  url : "",
  price : "",
  colors : [],
  catagory : {
    name : "",
    imageUrl : ""
  }
 })
 settempcolors([]);
 closeedit();
}
const canceldata =  () :void => {
setProduct({
  title : "",
  description : "",
  url : "",
  price : "",
  colors : [],
  catagory : {
    name : "",
    imageUrl : ""
  }
});
close();
}

const canceleditdata =  () :void => {
 
  closeedit();
  }
/* render */
const data = products.map(ele => {
  return (
    <>
     <ProductCard key={ele.id} product={ele}  setProducttoedit={setProducttoedit}  setProducttoremove={ setProducttoremove} openedit={openedit} openremove={openremove}/>

    </>
  )
})


const formdatarender = formdata.map(ele => {
  return (
    
    <div className="form-control w-full mb-4" key={ele.id}>
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">{ele.label}</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md ${errorform[ele.name] ?  'border-red-500' :''}`} name={ele.name} type={ele.type} placeholder={ele.placeholder} value={product[ele.name]} onChange={eventhandler} />
   
    <Error message={errorform[ele.name]}/>
   
  

  </div>

  )
})


const removeproduct = () => {
  console.log(Producttoremove,"dele") 
  setproducts((prev) => prev.filter(ele => ele.id !== Producttoremove.id))
  closeremove()
  toast('product has been deleted.');

}
//colors mapping

let coloritem = colors.map(ele =>{
return(
  <>
<CircleColor key={ele} color={ele} onClick={()=> {
  if(tempcolors.includes(ele)){
    settempcolors((prev) => [...prev.filter(el => el !== ele)])
    return;
  }
  settempcolors((prev) => [...prev,ele])
}
  } />
</>
)
});



let coloritem2 = colors.map(ele =>{
  return(
    <>
  <CircleColor key={ele} color={ele} onClick={()=> {
    if(producttoedit.colors.includes(ele)){
      setProducttoedit((prev) =>({...prev,colors : prev.colors.filter(el => el !== ele)}))
      return;
    }
   setProducttoedit((prev) =>({...prev,colors : [...prev.colors,ele]}))
  }
    } />
  </>
  )
  });
  return (
    <>
    <main className='container mx-auto mt-12'>
      <div className="flex justify-between">
      <Button className="bg-indigo-500 hover:bg-blue-600 text-white p-2  mx-auto rounded-md mb-5" style={{width:"211px"}} onClick={open}>add product</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
   
  {data}
</div>
</main>
   <Modal isOpen={isOpen} close={close} title="add product" > 
   <form onSubmit={submithandler} className='space-x-3'>
    <div className='flex flex-col mb-4 '>
 
    {formdatarender}
    <div className='my-4'>


<Select selected={selected} setSelected={setSelected} />
</div>
    </div>
    <div className='my-3 flex  flex-wrap'>
{
tempcolors.map(ele => {
  return(
<React.Fragment key={ele}>
  <span style={{backgroundColor:ele}} className='text-white px-2 py-1 rounded mr-2 my-2'>{ele}</span>
</React.Fragment>
  )
})
}


</div>
    <div className='my-6 flex justify-between'>
{coloritem}

</div>
<div className='my-6 flex justify-between'>
{col &&<Error message={errorform['colors']}/> }
</div>
    <div className='flex items-center space-x-2'>
    <Button type='button' className="rounded-md px-2 py-3 bg-gray-500 hover:bg-gray-600 text-white w-full " onClick={canceldata}>cancel</Button>
    <Button type='submit' className="rounded-md px-2 py-3 bg-indigo-500 hover:bg-blue-600 text-white  w-full">submit</Button>
    </div>
   
    </form>

   </Modal>

    {/* edit modal */}
      <Modal isOpen={iseditOpen} close={closeedit} title="edit product" > 
   <form onSubmit={submitedithandler} className='space-x-3'> 
   <div className="form-control w-full mb-4">
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">title</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md `} name='title' type='text' placeholder='add your title' value={producttoedit['title']} onChange={eventedithandler} />
   
    <Error message={errorform['title']}/>
   
  

  </div>

  <div className="form-control w-full mb-4">
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">desc</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md `} name='description' type='text' placeholder='add your desc' value={producttoedit['description']} onChange={eventedithandler} />
   
    <Error message={errorform['description']}/>
   
  

  </div>


  <div className="form-control w-full mb-4">
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">url</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md `} name='url' type='text' placeholder='add your   url' value={producttoedit['url']} onChange={eventedithandler} />
   
    <Error message={errorform['url']}/>
   
  

  </div>


  <div className="form-control w-full mb-4">
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">price</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md `} name='price' type='text' placeholder='add your price' value={producttoedit['price']} onChange={eventedithandler} />
   
    <Error message={errorform['price']}/>
   
  

  </div>
  <div className='my-4'>


<Select selected={producttoedit.catagory} setSelected={(value) => setProducttoedit({...producttoedit,catagory:value})} />
</div>
  {
producttoedit.colors.map(ele => {
  return(
<React.Fragment key={ele}>
  <span style={{backgroundColor:ele}} className='text-white px-2 py-1 rounded mr-2 my-2 inline-block'>{ele}</span>
</React.Fragment>
  )
})
}

    <div className='my-6 flex justify-between'>
{coloritem2}

</div>
    {/* <div className='flex flex-col mb-4 '>
 
    {formdatarender}
    <div className='my-4'>


<Select selected={selected} setSelected={setSelected} />
</div>
    </div>
    <div className='my-3 flex  flex-wrap'>
{
tempcolors.map(ele => {
  return(
<React.Fragment key={ele}>
  <span style={{backgroundColor:ele}} className='text-white px-2 py-1 rounded mr-2 my-2'>{ele}</span>
</React.Fragment>
  )
})
}


</div>
    <div className='my-6 flex justify-between'>
{coloritem}

</div>
<div className='my-6 flex justify-between'>
{col &&<Error message={errorform['colors']}/> }
</div> */}
    <div className='flex items-center space-x-2'>
    <Button type='button' className="rounded-md px-2 py-3 bg-gray-500 hover:bg-gray-600 text-white w-full " onClick={canceleditdata}>cancel</Button>
    <Button type='submit' className="rounded-md px-2 py-3 bg-indigo-500 hover:bg-blue-600 text-white  w-full">submit</Button>
    </div>
   
    </form> 

   </Modal>



   {/* //remove modal */}
<Modal isOpen={isremoveOpen} close={closeremove} title="remove product" >

  <p className=' text-1xl font-bold p-4 my-4'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error maiores impedit blanditiis quam reprehenderit iste inventore explicabo mollitia porro nobis ab voluptatem, maxime officiis cum laborum corrupti assumenda consequatur tempore.

  </p>
    <div className='flex items-center space-x-2'>
    <Button type='button' className="rounded-md px-2 py-3 bg-gray-500 hover:bg-gray-600 text-white w-full " onClick={closeremove}>cancel</Button>
    <Button type='button' className="rounded-md px-2 py-3 bg-red-500 hover:bg-red-600 text-white  w-full" onClick={removeproduct}>yes, confirm</Button>
    </div>
   
   

   </Modal>
   <Toaster />
    </>
  )
}

export default App
