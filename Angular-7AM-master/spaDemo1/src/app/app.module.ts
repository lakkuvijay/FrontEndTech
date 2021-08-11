import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { ShirtsComponent } from './shirts.component';
import { PantsComponent } from './pants.component';
import { KidsComponent } from './kids.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { PoloComponent } from './polo.component';
import { NikiComponent } from './niki.component';
import { SummerComponent } from './summer.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ShirtsComponent,
    PantsComponent,
    KidsComponent,
    PoloComponent,
    NikiComponent,
    SummerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
