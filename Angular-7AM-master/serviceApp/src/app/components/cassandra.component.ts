import { Component } from "@angular/core";
import dbService from "../services/db.service";
@Component({
    selector:"cassandra",
    templateUrl:"./cassandra.component.html"
})
export default class cassandraComponent{
     message:any;
     constructor(private service:dbService){}
     ngOnInit(){
         this.message = this.service.cassandraDBData();
     }
};