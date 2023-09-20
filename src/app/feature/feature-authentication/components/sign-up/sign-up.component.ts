import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';

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
     this.signForm= this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password:['', Validators.required]
     })
    this.laodingJsService.loadingMainJs('assets/js/app.bundle.min.js')
  }

}
