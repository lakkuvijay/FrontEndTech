import { Component } from "@angular/core";
@Component({
    selector : "mevn",
    templateUrl : "./mevn.component.html"
})
export default class mevnComponent{
    message:string;
    constructor(){
        this.message = "MEVN Stack....!";
    }
};