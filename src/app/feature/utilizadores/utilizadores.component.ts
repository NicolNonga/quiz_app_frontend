import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {

  public usersData: Array<any> = [];
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.authService.getAllUsers().subscribe((res)=>{
       this.usersData = res?._value;
    })
  }
}
