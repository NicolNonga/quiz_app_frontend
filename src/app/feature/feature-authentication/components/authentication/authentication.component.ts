import { Component, OnInit } from '@angular/core';
import { LoadingJsFile } from 'src/app/core/services/loadingJs/loadingJs.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private loadingJs: LoadingJsFile) {
    this.loadingJs.loadingMainJs('assets/js/app.bundle.min.js')
   }

  ngOnInit(): void {
  }

}
