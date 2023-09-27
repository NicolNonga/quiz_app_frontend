import { Component, Input, OnInit } from '@angular/core';
import { IGericButton } from '../../interface/generic-button.interface';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent extends DumbComponent {

   @Input() proprietyButton! : IGericButton 
  constructor() { 
    super()
  }



}
