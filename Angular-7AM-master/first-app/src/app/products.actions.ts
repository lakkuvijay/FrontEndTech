import { Action } from "@ngrx/store";
import Product from "./product.modal";

export enum ProductsActions{
    ProductsLoading = "[Product] Loading",
    ProductsLoadingSuccess  = "[Product] Loading Success",
    ProductsLoadingFail = "[Product] Loading Fail"
}


export class ProductsLoading implements Action{
    public readonly type = ProductsActions.ProductsLoading;
}

export class ProductsLoadingSuccess implements Action{
    public readonly type = ProductsActions.ProductsLoadingSuccess;
    constructor(public products:Product[]){}   
}

export class ProductsLoadingFail implements Action{
    public readonly type = ProductsActions.ProductsLoadingFail;
    constructor(public error:string){}
};

export type ProductsActionsTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;