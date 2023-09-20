import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/auth.service';
import { IUser } from '../../interface/user.interface';
import { LoadingJsFile } from '../../services/loadingJs/loadingJs.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
     public correntUser!:IUser | null;
  constructor(private authService:AuthenticationService, private laodingJsService: LoadingJsFile) { }

  ngOnInit(): void {
    this.correntUser= this.authService.userValue;
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

}
