import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css']
})
export class SearhComponent extends DumbComponent{

  public  filterQuizValue!: string;
  @Output () EmitterValueSearch = new EventEmitter<any>();
  @Input() placerholderText: string = ''
    
  constructor() {
    super()
   }



   public search(){
          this.EmitterValueSearch.emit(this.filterQuizValue)
   }

}
