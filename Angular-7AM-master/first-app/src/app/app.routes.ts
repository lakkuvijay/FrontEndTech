import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import authGuard from "./auth.guard";
import demoComponent from "./demo.component";

export const appRoutes:Routes = [
    {path:"link1",component:demoComponent},
    {path:"link2",loadChildren:()=>import("./product.module").then(obj=>obj.productModule),canLoad:[authGuard]}
];

export const lazyRoutes:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


//finally we are getting "lazyRoutes"
//lazyRoutes, we must register in imports section in AppModule.

