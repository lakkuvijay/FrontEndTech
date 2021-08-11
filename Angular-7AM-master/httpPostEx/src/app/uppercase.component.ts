import { Component } from "@angular/core";
import uppercaseService from "./uppercase.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector : "uppercase",
    templateUrl:"./uppercase.component.html"
})
export default class uppercaseComponent{
    my_data:string;
    result:any;
    constructor(private service:uppercaseService){
        this.my_data = "";
    }
    public clickMe():any{
        this.service.convertToUpperCase({"message":this.my_data}).subscribe((posRes)=>{
            this.result = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log( errRes );
        });
    };
};