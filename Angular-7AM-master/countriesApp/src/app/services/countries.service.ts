//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";
//import HttpClient
//HttpClient is used to make the rest api calls
import { HttpClient } from "@angular/common/http";
//import Observable
//Observable used to make the asynchronous calls
import { Observable } from "rxjs";
//use Injectable
@Injectable({
    providedIn:"root"
})
//export the class
export default class countriesService{
   constructor(private http:HttpClient){}
   public getCountries():Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/all");
   };
};
