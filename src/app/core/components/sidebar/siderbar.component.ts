import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/auth.service';
import { IUser } from '../../interface/user.interface';
import { LoadingJsFile } from '../../services/loadingJs/loadingJs.service';
import { UserModel } from '../../model/user';


@Component({
  selector: 'siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderBarComponent implements OnInit {
  
    public userLogIn!:UserModel
  constructor( private laodingJsService: LoadingJsFile, private authService: AuthenticationService) { }

  ngOnInit(): void {
     this.userLogIn = this.authService.getItemLocalStorage?.data
     console.log(this.userLogIn.type_user)
     console.log(this.userLogIn.type_user == "ADMIN")
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

}
