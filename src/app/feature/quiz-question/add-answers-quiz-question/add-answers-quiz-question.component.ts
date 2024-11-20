import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DumbComponent } from "src/app/core/components/dumb-component/dumb-component.compoent";

@Component({
  selector: "app-add-answers-quiz-question",
  templateUrl: "./add-answers-quiz-question.component.html",
  styleUrls: ["./add-answers-quiz-question.component.css"],
})
export class AddAnswersQuizQuestionComponent extends DumbComponent {
  formData!: FormData;
  public asnwersAdd: Array<any> = [];
  public fileAdd: Array<any> = []
  @Input() quiz_section!: any;
  @Output() answerEvents = new EventEmitter<any>();
  file!:File

  isImg: boolean = true;
  public answersForm = { option_text: "", is_img: true, is_correct: false };
  constructor() {

    super();
   
  }

  onFileSelected(event:any){
     this.file = event.target.files[0]


  }

  deleteAnswers(index:any){
    console.log(index)
      this.asnwersAdd.splice(index, 1)

  }

  addAnswers() {

     if(!this.answersForm.is_img && this.answersForm.option_text ===''){
         alert("por favor preecha os campos")
         return
     }
    this.asnwersAdd.push(
      {
      option_text: this.answersForm.option_text,
      is_img: this.answersForm.is_img,
      is_correct: this.answersForm.is_correct ? true: false,
    });

   this.fileAdd.push({
    file: this.file
   })

   this.answersForm.option_text= '';
   
  }

  submitForm() {
    if(this.asnwersAdd.length === 0){
      alert("Adicionar um opção de resposta")
      return 
    }
    this.formData = new FormData();
    const data = {
      quiz_question_id: this.quiz_section?.quizQuestion?.quiz_question?.id,
      quiz_option: this.asnwersAdd,
    };

   

/*     for(let i =0; i < this.file?.files.length; i++) {
      console.log('teste')
      this.formData.append("file", this.file.files[i]); 
} */

    this.formData.append("quiz_option", JSON.stringify(this.asnwersAdd));
    this.formData.append(
      "quiz_question_id",
      this.quiz_section?.quizQuestion?.quiz_question?.id
    );

        
    for(let i =0; i < this.fileAdd.length; i++) {

     this.formData.append("files", this.fileAdd[i].file);
}

    this.answerEvents.emit(this.formData);
  }

  SetTypeOptionAnswer(event:  any){
     const value= (event.target as HTMLTextAreaElement).value
     console.log(value)
    this.answersForm.is_img =  value == '1' ? true: false
    console.log(this.answersForm.is_img)
  }
}
