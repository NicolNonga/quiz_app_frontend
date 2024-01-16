import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DumbComponent } from 'src/app/core/components/dumb-component/dumb-component.compoent';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

   public userForm!: FormGroup
   @Output () userEvent = new EventEmitter<any> ()
   @Output() updateUserEvent = new EventEmitter<any> ();
   public title:string= "Criar Utilizador"
   public submitted:boolean = false;
   public isUpdated:boolean = false

  constructor(private authService: AuthenticationService) { 
    
    this.userForm= new FormGroup({
      username: new FormControl('',[ Validators.required]),
      password: new FormControl('',[ Validators.required]),
      type_user: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

   createUser(){
    this.submitted = true
     if(this.userForm.invalid){
      return
     }

     this.authService.criarUser(this.userForm.value).subscribe((res)=> {
        this.userEvent.emit(true)
        this.submitted= false
     })

      
    
   }

  get f () {
    return this. userForm.controls
  }

  resetForm(){
    this.submitted=  false
     this.userForm.reset()
  }
}
