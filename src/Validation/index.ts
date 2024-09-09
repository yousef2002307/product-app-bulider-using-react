import { IUserdata } from '../Interface';
/**
 * Validation function for product data.
 * @param {IUserdata} product - product data to be validated.
 * @returns {IUserdata} - an object with error messages for each field.
 */

export const validationerrorsProduct = (product: IUserdata): IUserdata => {

    const errors= { 
        title: '',
        description: '',
        url: '',
        price: '',
        colors: '',
        catagory: ''
    };
    const imageRegex = /^https?:\/\/(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w \.-]*)*\/?.*$/i.test(product.url);
    if (!product.title.trim() || product.title.length < 3 || product.title.length > 20) {

        errors.title = " size of string must between 3 and 20";
    }
    if (!product.description.trim() || product.description.length < 3 || product.description.length > 100) {

        errors.description = " size of string must between 3 and 100";
    }

    if (!product.url.trim() || !imageRegex) {

        errors.url = " image url is invalid";
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = " price must be number"
    }
    // if(product.colors.length <= 0){
    //     errors.colors = " please select at least one color"
    // }

    return errors
}
