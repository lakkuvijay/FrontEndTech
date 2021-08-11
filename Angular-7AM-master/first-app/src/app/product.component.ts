import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import productService from "./product.service";

@Component({
    selector:"product",
    templateUrl:"./product.component.html"
})

export default class productComponent{
    products:any;
    
    constructor(private service:productService){}

    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            this.products = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
                console.log("client side error");
            }else{
                console.log("server side error");
            }
        })
    }
};