import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import bodyComponent from './body.component';
import footerComponent from './footer.component';
import headerComponent from './header.component';
import mainComponent from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    mainComponent,
    footerComponent,
    bodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
