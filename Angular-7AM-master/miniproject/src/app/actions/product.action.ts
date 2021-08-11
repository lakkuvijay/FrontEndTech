import { Action } from "@ngrx/store";
import Product from "../modal/product.modal";

export enum ProductsActions{
    GetProducts = "[Products] Loading",
    ProductsLoadingSuccess = "[Products] Loading Success",
    ProductsLoadingFail = "[Products] Loading Fail"
};


export class GetProducts implements Action{
    public readonly type = ProductsActions.GetProducts;
};

export class ProductsLoadingSuccess implements Action{
    public readonly type = ProductsActions.ProductsLoadingSuccess;
    constructor(public products:Product[]){}
};

export class ProductsLoadingFail implements Action{
    public readonly type = ProductsActions.ProductsLoadingFail;
    constructor(public error:any){}   
};


export  type ProductActionsTypes = GetProducts | ProductsLoadingSuccess | ProductsLoadingFail;



