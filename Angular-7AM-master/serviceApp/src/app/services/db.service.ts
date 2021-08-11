//import Injectable
//Injectable, is the predefined class
//Injectable present in @angular/core package
//Injectable, used to create the custom service
import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export default class dbService{
    mongoDBData():any{
        return {"message":"data from mongodb database soon....!"}
    };

    cassandraDBData():any{
        return {"message":"data from cassandraDB DataBase Soon....!"}
    };
};