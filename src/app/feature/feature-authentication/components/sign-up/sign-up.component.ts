import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { confirmPasswordValidator } from 'src/app/core/services/passwordValidation/password_validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   public signForm!: FormGroup;
   loading:boolean = false;
   error: String= ''
   public submitted:boolean = false;
  constructor(private laodingJsService: LoadingJsFile, 
    private AuthService: AuthenticationService,
    private notificationService: NotificationService,
    ) {
  
  }

  ngOnInit(): void {
     this.signForm=  new FormGroup({
      username: new FormControl('',[ Validators.required]),
      password: new FormControl('',[ Validators.required]),
      //confirm_password: new FormControl('',[ Validators.required]),
     
     }/* ,  {validators: confirmPasswordValidator} */);
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

  signup(){
    console.log("this is ")
    this.submitted= true
      if(this.signForm.invalid){
        return
      }

      const userInfo:any = {
           username: this.signForm.get('username')?.value,
           type_user: 'User',
           password: this.signForm.get("password")?.value
      }

      this.AuthService.criarUser(userInfo).subscribe((response)=> {
        if(response){
          this.notificationService.showSucess('Conta Criado com sucesso')
        }
      })
  }

  get f () {
    return this.signForm.controls
  }

}
