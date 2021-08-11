import { Component } from "@angular/core";
import { myService } from "../services/my.service";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
    res:any;
    constructor(public service:myService){}
    ngOnInit(){
        this.res = this.service.fun_two();
    };
};