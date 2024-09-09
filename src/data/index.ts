import {v4 as uuid} from 'uuid'
import {IProduct} from '../Interface'
import { IUserdata,ICat } from '../Interface';
import { IFormdata } from '../Interface';
import { faker } from "@faker-js/faker";

export const productlist : IProduct[] = [
    {
        id : uuid(),
        title : "title 1",
        description : "lorem ipuam hi mhroIpsum comes from sections 1.10.32 and 1.10.33 ofde Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.",
        url : faker.image.urlPicsumPhotos(),
    
        price : "555",
        colors : ["#FFC0CB","#0000FF","#000080"],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id : uuid(),
        title : "title 2",
        description : "lorem ipuam hi man hashdjka adklasdsdalk2222222222",
        url : faker.image.urlPicsumPhotos(),
    
        price : "100",
        colors : ["#FFA500"],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id : uuid(),
        title : "title 3",
        description : "33 lorem ipuam hi man hashdjka adklasdsdalk",
       url : faker.image.urlPicsumPhotos(),
    
        price : "37963",
        colors : ["#FF0000","#FFC0CB"],
        catagory : {
            name : "cat 2",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },

    {
        id : uuid(),
        title : "title 4",
        description : "lorem ipuam hi man hashdjka adklasdsdalk. comes from a line in section 1.10.32.",
        url : faker.image.urlPicsumPhotos(),
    
        price : "15",
        colors : ["#FFC0CB","#0000FF","#000080"],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },

    {
        id : uuid(),
        title : "title 5",
        description : "lorem ipuam hi man hashdjka adklasdsdalk. comes from a line in section 1.10.32.",
        url : faker.image.urlPicsumPhotos(),
    
        price : "77",
        colors : ["#FFC0CB","#0000FF","#000080",'#FFFF00'],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
]

export const formdata : IFormdata=[
    {
       label:"title",
       name:"title",
       type:"text",
       placeholder:"Enter your title",
       id:"name",

    },
    {
        label:"description",
       name:"description",
       type:"text",
       placeholder:"Enter your desc",
       id:"email",
    },
    {
        label:"url",
       name:"url",
       type:"text",
       placeholder:"Enter your url",
       id:"url",
    },
    {
        label:"price",
       name:"price",
       type:"price",
       placeholder:"Enter your price",
       id:"price",
    },

]

export const colors : string[] =[
    "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#000080",
  "#800000",
  "#008080",
  "#FFC0CB",
  "#ADD8E6",
  
] ;
export const catagories :ICat[] =[
    {
        id : uuid(),
        name : "cat 1",
        imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id : uuid(),
        name : "cat 2",
        imageUrl : "https://th.bing.com/th/id/OIP.SLXZeuIoCke-8XztFgrLYwHaE8?rs=1&pid=ImgDetMain"

    },
    {
        id : 2,
      name : "Cotton Shirt",
        imageUrl : "https://th.bing.com/th/id/OIP.JN2YuhRiEVw4-QjfLIBHkgHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    }
    ]