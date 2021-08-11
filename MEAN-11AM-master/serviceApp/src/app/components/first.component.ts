import { Component } from "@angular/core";
import { myService } from "../services/my.service";
@Component({
    selector : "first",
    templateUrl : "./first.component.html"
})
export class firstComponent{
    res:any;
    constructor(public service:myService){}
    ngOnInit(){
        this.res = this.service.fun_one(); 
    }
};