import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { SearchResidentResponse } from '../interface/resident.interface';


@Component({
  selector: 'app-resident-info',
  templateUrl: './resident-info.component.html',
  styleUrls: ['./resident-info.component.css']
})
export class ResidentInfoComponent implements OnInit {

  @Input() endPointResident: string = '';
  public residentInfo: SearchResidentResponse;


  constructor(private locationService: LocationService) {
    this.residentInfo = {
      id:       0,
      name:     '',
      status:   '',
      species:  '',
      type:     '',
      gender:   '',
      origin:   {name: '', url: ''},
      location: {name: '', url: ''},
      image:    '',
      episode:  [],
      url:      '',
      created:  '',
    }
  }

  ngOnInit(): void {
    this.locationService.getResidentsByLocation(this.endPointResident)
          .subscribe(resp => {
            this.residentInfo = resp
          })   
  }

 
  
  
   
  
}
