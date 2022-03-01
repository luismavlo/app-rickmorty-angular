import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchLocationResponse } from '../location/interfaces/location.interface';
import { SearchResidentResponse } from '../residents/interface/resident.interface';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private serviceUrl: string = 'https://rickandmortyapi.com/api/';
  private _dataLocation: SearchLocationResponse = {
      id:        0,
      name:      '',
      type:      '',
      dimension: '',
      residents: [],
      url:       '',
      created:   ''
  }
 

  constructor( private http: HttpClient ) {}

  get dataLocation(): SearchLocationResponse{
    return this._dataLocation
  }

  addDataLocation( data:SearchLocationResponse ): any{
    this._dataLocation = data;
  }
  
  public getLocation( endPoint:string, query:string = ''){
    return this.http.get<SearchLocationResponse>( `${this.serviceUrl+endPoint}/${query}`)
  }

  public getResidentsByLocation( endPoint:string ){
    return this.http.get< SearchResidentResponse >(endPoint)       
  }

 


}
