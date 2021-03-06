import { IPerson } from "./IPerson.interface";
import { IProduct } from "./IProduct.interface";

export interface ICart{
    id? : number,
    product : IProduct,
    person : IPerson ,
    amount : number 
}