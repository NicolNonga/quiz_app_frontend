import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {

  public usersData: Array<any> = [];
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe((res) => {
      this.usersData = res?._value;
    })
  }

  showQuizSection(user: any): void {
      if(user.type_user !== 'User'){
         alert("Administrador/Professor : Escolhe um estudante")
        return
      }
    this.router.navigate(["quiz-section-utilizador", user.id])
  }
}
