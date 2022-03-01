import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentInfoComponent } from './resident-info/resident-info.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    ResidentListComponent,
    ResidentInfoComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResidentListComponent
  ]
})
export class ResidentsModule { }
