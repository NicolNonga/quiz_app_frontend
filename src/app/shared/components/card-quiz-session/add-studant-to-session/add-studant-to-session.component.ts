import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';

@Component({
  selector: 'app-add-studant-to-session',
  templateUrl: './add-studant-to-session.component.html',
  styleUrls: ['./add-studant-to-session.component.css']
})
export class AddStudantToSessionComponent implements OnInit, OnChanges {

  @Input() QuizSectionId! : string
   public quizSection_id!: string
    public users: Array<any> = []
  constructor(private userService: AuthenticationService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  ngOnChanges(){
      if(this.QuizSectionId !== null){
              this.quizSection_id= this.QuizSectionId
      }
  }

  getAllUser(){
    this.userService.getAllUsers().subscribe((res)=>{
        this.users =  res._value
    
    })
  }

}
