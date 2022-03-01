import { Component, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(){}

  @Output() outLocation: EventEmitter<string> = new EventEmitter();

  search(){
    const valor = this.txtBuscar.nativeElement.value;
    if( valor.trim().length === 0){
      return;
    }

    this.outLocation.emit( valor )
    this.txtBuscar.nativeElement.value = '';
  }

}
