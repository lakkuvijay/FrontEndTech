import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class myService{
    public fun_one():any{
        return {"key1":"Angular11"};
    };
    public fun_two():any{
        return {"key1":"ReactJS"};
    };
}