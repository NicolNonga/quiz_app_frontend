import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/auth.service';
import { IUser } from '../../interface/user.interface';
import { LoadingJsFile } from '../../services/loadingJs/loadingJs.service';

@Component({
  selector: 'siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderBarComponent implements OnInit {
  
  constructor( private laodingJsService: LoadingJsFile) { }

  ngOnInit(): void {
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

}
