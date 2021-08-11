import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import productsService from "../products.service";
import * as allActions from "../.";
import { mergeMap,map, catchError } from "rxjs/operators";
import Product from "../modal/product.modal";

@Injectable({
    providedIn:"root"
})
export default class productsEffect{
    constructor(private actions:Actions,
                private service:productsService){}
    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.ProductsActions.GetProducts),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.ProductsLoadingSuccess(posRes);
        }),
        catchError((err:any)=>of(new allActions.ProductsLoadingFail("Network Error")))))
    );
};