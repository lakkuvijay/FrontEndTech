import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import productService from "./product.service";
import * as allActions from ".";
import { catchError, mergeMap,map } from "rxjs/operators";
import Product from "./product.modal";

@Injectable({
    providedIn:"root"
})
export class productsEffects{
    constructor(private service:productService,
                private actions:Actions){}
    
    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.ProductsActions.ProductsLoading),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.ProductsLoadingSuccess(posRes);
        }),catchError((err)=>of(new allActions.ProductsLoadingFail("Network Error")))))
    )
}