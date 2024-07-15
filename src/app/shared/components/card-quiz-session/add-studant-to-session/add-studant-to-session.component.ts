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

  @Input() QuizSectionId!: string
  public quizSection_id!: string
  public users: Array<any> = []
  public quizSectionUser: Array<userAddToQuiz> = []
  public allUserFromQuiz: Array<any> = []
  public usersAddToQuiz: Array<any> = []

  constructor(private userService: AuthenticationService,
    private quizSectionService: QuizSectionService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  ngOnChanges() {
  
    if (this.QuizSectionId !== undefined) {
      this.quizSection_id = this.QuizSectionId

       this.usersFromQuiz(this.quizSection_id)
           this.getAllUser()


    }
  }

  getAllUser() {
    this.quizSectionUser = []
    this.userService.getAllUsers().subscribe((res) => {


      this.users = res._value?.filter((value: any) => value?.type_user === "User")
      this.userFilter(this.users)



    })
  }
  private userFilter(users: Array<any>) {


    for (let user of users) {

      let userFounded = this.allUserFromQuiz.find((element) => element?.user?.id === user?.id)


      if (userFounded?.is_completed) {
        continue
      }
      if (userFounded) {
        this.quizSectionUser.push({
          id: user?.id,
          username: userFounded?.user.user_name,
          added: true
        })
      } else {
        this.quizSectionUser.push({
          id: user?.id,
          username: user?.username,
          added: false
        })
      }

    }

    
  }

  addUserToQuizSection(user_id: string) {
    this.usersAddToQuiz = [];
    this.usersAddToQuiz.push(user_id)

    this.quizSectionService.addUserToQuizSection(this.usersAddToQuiz, this.quizSection_id).subscribe((res) => {
      this.usersFromQuiz(this.quizSection_id)
      this.updateUser(user_id, true)
      
    })

  }

  removerUserToQuizSection(user_id: string) {
    this.quizSectionService.removeUserToQuizSection(user_id, this.quizSection_id).subscribe((res)=> {
      //this.getAllUser()
        this.usersFromQuiz(this.quizSection_id)
           this.updateUser(user_id, false)
    })

  }

  public updateUser(user_id:string, is_add: boolean){
     const  userFoundIndex = this.quizSectionUser.findIndex((element) => element.id === user_id);
     this.quizSectionUser[userFoundIndex].added = is_add
    
     
  }
  private usersFromQuiz(quiz_section_id:string){
 
    this.quizSectionService.getAllUserFromQuiz(quiz_section_id).subscribe((res) => {
      this.allUserFromQuiz = res?._value
      

    })
  }
}
