import { Component } from "@angular/core";
import dbService from "../services/db.service";
@Component({
    selector : "mongodb",
    templateUrl : "./mongodb.component.html"
})
class mongodbComponent{
    message:any;
    constructor(private service:dbService){}
   
    ngOnInit(){
        this.message = this.service.mongoDBData();
    };

};
export default mongodbComponent;