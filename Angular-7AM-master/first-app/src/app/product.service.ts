import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import Product from "./product.modal";

import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export default class productService{
    
    constructor(private http:HttpClient){}

    public getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`http://localhost:5000/api/v1/products`);
    };

}