import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import authGuard from "./auth.guard";
import { PageoneComponent } from "./pageone.component";

export const appRoutes:Routes = [
    {path:"page_one",component:PageoneComponent},
    {path:"lazy",loadChildren:()=> import("./countries.module").then(obj=>obj.countriesModule), canLoad:[authGuard]}
];


export const lazyRoutes:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);