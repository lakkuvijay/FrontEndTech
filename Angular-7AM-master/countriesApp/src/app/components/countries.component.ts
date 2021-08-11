import { Component } from "@angular/core";
import countriesService  from "../services/countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export default class countriesComponent{
    abc:any;
    constructor(private service:countriesService){} 
    ngOnInit(){
        this.service.getCountries().subscribe((posRes:any)=>{
            this.abc = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    }   
};