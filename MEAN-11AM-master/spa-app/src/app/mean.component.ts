import { Component } from "@angular/core";
@Component({
    selector : "mean",
    templateUrl:"./mean.component.html"
})
export default class meanComponent{
    message : string;
    constructor(){
        this.message = "MEAN Stack Development !!!";
    };
};
