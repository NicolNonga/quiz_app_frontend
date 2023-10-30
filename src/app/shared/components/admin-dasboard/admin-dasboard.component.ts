import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  @Input () dasboardCount : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
