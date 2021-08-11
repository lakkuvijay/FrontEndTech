import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IState } from "./reducer/products.reducer";

import * as allActions from "./.";

@Component({
    selector : "countries",
    templateUrl:"./countries.component.html"
})

export default class countriesComponent{
    
    constructor(private store:Store<IState>){}
    
    
    
    //dispatch & subscription 
    ngOnInit(){
        //dispatch
        this.store.dispatch(new allActions.GetProducts());


        //subscription
        const result = this.store.pipe(select(allActions.allProducts));
        console.log(result);
     }
}