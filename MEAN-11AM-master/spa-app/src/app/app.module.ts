import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import mainComponent from './main.component';
import meanComponent from './mean.component';
import mernComponent from './mern.component';
import mevnComponent from './mevn.component';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    meanComponent,
    mernComponent,
    mevnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"mean",component:meanComponent},
                          {path:"mern",component:mernComponent},
                          {path:"mevn",component:mevnComponent}])
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
