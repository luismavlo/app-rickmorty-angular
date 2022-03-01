import { Component } from '@angular/core';
import { SearchLocationResponse } from '../interfaces/location.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent  {

    
  constructor(private locationService: LocationService) {}

  searchLocation( location: string){
    this.locationService.getLocation('location',location)
      .subscribe( resp => {
        this.locationService.addDataLocation(resp)
      });
  }

  get dataLocation(): SearchLocationResponse{
    return this.locationService.dataLocation;
  }
  

  
}
