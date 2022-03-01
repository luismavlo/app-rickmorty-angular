import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from './location-info/location-info.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    LocationInfoComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocationInfoComponent
  ]
})
export class LocationModule { }
