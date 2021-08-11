import { Component } from "@angular/core";
@Component({
    selector : "mern",
    templateUrl : "./mern.component.html"
})
export default class mernComponent{
    message:string;
    constructor(){
        this.message = "MERN Stack....!";
    }
}