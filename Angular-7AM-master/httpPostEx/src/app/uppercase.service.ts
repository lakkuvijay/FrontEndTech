//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";


//import HttpClient
//HttpClient used to make the rest api calls
import { HttpClient } from "@angular/common/http";


//import Observable
//Observable used to make the asynchronous calls
import { Observable } from "rxjs";

//use Injectable
@Injectable({
    providedIn:"root"
})
export default class uppercaseService{
    constructor(private http:HttpClient){}
    public convertToUpperCase(data:any):Observable<any>{
        return this.http.post("http://test-routes.herokuapp.com/test/uppercase",data);
    };
};