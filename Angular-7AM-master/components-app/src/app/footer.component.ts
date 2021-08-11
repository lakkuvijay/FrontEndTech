import { Component } from "@angular/core";

@Component({
    selector:"ashokit-footer",
    templateUrl:"./footer.component.html"
})

export default class footerComponent{
    message:string;
    constructor(){
        this.message = "Footer Soon....!";
    }
};