import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ElementsModule} from './elements/elements.module';
// import {CollectionsModule} from './collections/collections.module';--->not using for lazy loading to work
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [   // all the components will come by themselves when we create them inside the AppModule
    AppComponent,
    HomeComponent,  //not showing modules(remember)
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // ElementsModule,
    // CollectionsModule,
    AppRoutingModule   //here importing module not the component // we have to define imports manually unlike declarations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
