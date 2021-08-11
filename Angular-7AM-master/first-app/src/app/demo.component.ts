import { Component } from "@angular/core";
@Component({
    selector:"demo",
    templateUrl:"./demo.component.html"
})
export default class demoComponent{
    var_one:string;
    constructor(){
        this.var_one = "Demo Component !!!";
    }
};