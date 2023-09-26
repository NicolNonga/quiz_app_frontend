import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, retry } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  loading: boolean = false;
  submitted: boolean = false;
  error: string = ''
  buttonLoginText ='Entrar'
  constructor(private formBuider: FormBuilder,
    private authService: AuthenticationService,
    
    private route: ActivatedRoute,
    private router: Router,
  ) {
   /*      this.loadingJs.loadingMainJs("assets/js/app.bundle.min.js") */
    // redirect to home if already logged in? 
    if (this.authService.userValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    

    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get loginFormControl() { return this.loginForm.controls }

  onSubmit() {
  
     this.buttonLoginText= ''
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.setTextButtonLogin();
       this.loading= false;
      return;
    }

   

    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authentication()

    // ?  when backend is ready we will descomment it  this.authentication()


  }


   authentication(){
    this.authService.login(this.loginForm.value).pipe((first())).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([returnUrl])
      },
      error: ()=>{
        this.submitted= false
        this.loading= false
         this.setTextButtonLogin()
      }

    })
   }

  setTextButtonLogin(){
    this.buttonLoginText= "Entrar"
  }

  public loadJsFile(url:string) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  
}
