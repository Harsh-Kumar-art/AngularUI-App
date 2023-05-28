import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DividerComponent]//exporting this widget module's component for importing in different modules
})
export class SharedModule { }
