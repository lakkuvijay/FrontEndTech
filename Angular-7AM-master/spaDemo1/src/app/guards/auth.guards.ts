//import Injectable
//Injectable used to create the service
import { Injectable } from "@angular/core";

//use Injectable
@Injectable({
    providedIn:"root"
})

//export the service
export default class authService{
     canActivate():boolean{
        return confirm("do you want to enter into shirts route ??");
     };

     canDeactivate():boolean{
        return confirm("do you want to leave pants routing ??");
     };

     canActivateChild():boolean{
        return confirm("do you want to enter into summer route ??");
     };

};