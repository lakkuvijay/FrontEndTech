import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import productComponent from "./product.component";
import productService from "./product.service";
import { productsReducer } from "./products.reducer";

@NgModule({
    declarations:[productComponent],

    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:productComponent}]),
             ],

    providers:[productService],

    exports:[productComponent]
})

export class productModule{}