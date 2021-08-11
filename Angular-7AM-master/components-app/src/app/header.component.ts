import { Component } from "@angular/core";
@Component({
    selector : "ashokit-header",
    templateUrl:"./header.component.html"
})
export default class headerComponent{
     message:string;
     constructor(){
         this.message = "AshokIT";
     }
};