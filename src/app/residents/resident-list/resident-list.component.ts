import { Component, Input } from '@angular/core';
import { SearchLocationResponse } from 'src/app/location/interfaces/location.interface';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent  {
  public page: number = 0;

  //:::::::::::COMPONENTE PADRE:::::::::://

  constructor(private locationService: LocationService) { }

  //aca tengo los resultados de la localidad el tiene una propiedad que es un array de personajes
  //que contienen los endpont a consumir para mostrar la informacion de cada personaje
  get dataLocation(): SearchLocationResponse{
    return this.locationService.dataLocation;
  }

  nextPage(){
    this.page += 10;
  }

  previousPage(){
    if(this.page > 0)
    this.page -= 10
  }
  


}
