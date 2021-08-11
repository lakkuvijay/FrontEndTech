import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import uppercaseComponent from './uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    uppercaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [uppercaseComponent]
})
export class AppModule { }
