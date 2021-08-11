import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})

export default class productsIntreceptor{
    intrecept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        const req1 = req.clone({
            //access the data from local storage
            setHeaders:{
                "miniproject" : "ashokit"
            }
        })
        return handler.handle(req1);
    };
};
