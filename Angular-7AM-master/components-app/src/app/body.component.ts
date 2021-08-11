import { Component } from "@angular/core";
@Component({
    selector:"ashokit-body",
    templateUrl:"./body.component.html"
})
export default class bodyComponent{
    message:string;
    constructor(){
        this.message = "ECommerce Application Soon....!";
    }
};