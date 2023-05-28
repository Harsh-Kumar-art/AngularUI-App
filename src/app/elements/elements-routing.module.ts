import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component'; //importing component for routing
const routes: Routes = [
  {path:'', component:ElementsHomeComponent}  //configuration for the imported component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
