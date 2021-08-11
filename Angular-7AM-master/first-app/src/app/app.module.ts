import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { lazyRoutes } from './app.routes';
import demoComponent from './demo.component';
import masterComponent from './master.component';
import productIntreceptor from './product.intreceptor';
import { productsReducer } from './products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    masterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({"products":productsReducer}),
    lazyRoutes
  ],
  providers: [{
      provide:HTTP_INTERCEPTORS,
      useClass:productIntreceptor,
      multi:true
  }],
  bootstrap: [masterComponent]
})
export class AppModule { }
