import { Component } from "@angular/core";
import  countriesService  from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export default class countriesComponent{
    result:any;
    constructor(private service:countriesService){}
    
    ngOnInit(){
        this.service.getCountries().subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    }
};