//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";

//import HttpClient
//HttpClient used to make the rest api calls
import { HttpClient } from "@angular/common/http";


//import Observable
//Observable, used to make the asynchronous calls
import { Observable } from "rxjs";


//use Injectable
@Injectable({
    providedIn : "root"
})

//export service
export default class productsService{
    constructor(private http:HttpClient){}

    public getProducts():Observable<any>{
        return this.http.get("http://localhost:8080/products");
    };


};





