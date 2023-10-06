import { Component, Input, OnInit } from '@angular/core';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  extends DumbComponent {

  @Input () bannerData!: IBanner;
  constructor(){
    super()
  }

}


export interface IBanner {
  title: string,
  description: string
}