export interface IResponse<T>{
    data : T[] | T | JSON,
    message : string 
}