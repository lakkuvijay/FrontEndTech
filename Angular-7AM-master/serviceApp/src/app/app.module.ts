import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import cassandraComponent from './components/cassandra.component';
import mongodbComponent from './components/mongodb.component';

@NgModule({
  declarations: [
    AppComponent,
    mongodbComponent,
    cassandraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mongodbComponent]
})
export class AppModule { }
