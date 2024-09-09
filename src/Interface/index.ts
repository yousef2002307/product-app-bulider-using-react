import { colors } from './../data/index';
export interface IProduct{
    id ?: string | undefined
    title : string,
    description : string,
    url : string,

    price : string,
    colors : string[],
    catagory : {
        name : string,
        imageUrl : string
    }
}



export interface IUserdata{
   title : string,
   description : string,
    url : string,
    price : string,
    colors :string[],
    catagory : string
}
export interface IFormdata{
    label : string,
    name : keyof IUserdata,
    type : string,
    placeholder : string,
    id : string
}


export interface ICat{
    id ?: string | undefined,
    name : string,
    imageUrl : string
}