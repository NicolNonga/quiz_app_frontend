import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';
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
  constructor(private laodingJsService: LoadingJsFile, private formBuilder: FormBuilder) {
  
  }

  ngOnInit(): void {
     this.signForm=  new FormGroup({
      usranme: new FormControl('',[ Validators.required]),
      password: new FormControl('',[ Validators.required]),
      confirm_password: new FormControl('',[ Validators.required]),
     
     },  {validators: confirmPasswordValidator});
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

}
