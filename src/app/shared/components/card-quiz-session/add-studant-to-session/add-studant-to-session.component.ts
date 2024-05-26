import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/auth.service';
import { QuizSectionService } from 'src/app/core/services/quiz-section/quiz-section.service';


interface userAddToQuiz {
  username: string,
  added: boolean,
  id: string
}
@Component({
  selector: 'app-add-studant-to-session',
  templateUrl: './add-studant-to-session.component.html',
  styleUrls: ['./add-studant-to-session.component.css']
})
export class AddStudantToSessionComponent implements OnInit, OnChanges {

  @Input() QuizSectionId! : string
   public quizSection_id!: string
  public users: Array<any> = []
  public  quizSectionUser:  Array<userAddToQuiz> = []
  public  allUserFromQuiz: Array<any> = []
  public usersAddToQuiz: Array<any> = []

  constructor(private userService: AuthenticationService, 
    private quizSectionService: QuizSectionService) { }

  ngOnInit(): void {
    //this.getAllUser()
  }

  ngOnChanges(){
    console.log(this.QuizSectionId)
      if(this.QuizSectionId !== undefined){
              this.quizSection_id= this.QuizSectionId
               
              this.quizSectionService.getAllUserFromQuiz(this.quizSection_id).subscribe((res)=> {
                this.allUserFromQuiz = res?._value
           
              })

            this.getAllUser()

           
      }
  }

  getAllUser(){
    this.userService.getAllUsers().subscribe((res)=>{

    
        this.users =  res._value?.filter((value:any)=> value?.type_user === "User" )
        this.userFilter(this.users)
    
        
    
    })
  }
   private  userFilter(users: Array<any>) {
             
                 
                   for(let user of users){
                       console.log(user)
                     let userFounded = this.allUserFromQuiz.find((element) => element?.id === user?.id)
                     console.log(userFounded)
                     if(userFounded){
                      this.quizSectionUser.push({
                        id:   user?.id,
                        username: userFounded?.user_name,
                        added: true
                      })
                     }else{
                      this.quizSectionUser.push({
                        id: user?.id,
                        username: user?.username,
                        added: false
                      })
                     }

                   }

                   console.log(this.quizSectionUser)
   }

   addUserToQuizSection(user_id: string){
         this.usersAddToQuiz = [];
         this.usersAddToQuiz.push(user_id)

         this.quizSectionService.addUserToQuizSection(this.usersAddToQuiz, this.quizSection_id).subscribe((res)=> {
            console.log(res)
         })

   }
}
