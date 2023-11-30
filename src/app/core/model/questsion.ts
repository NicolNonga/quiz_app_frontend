import { IQuizQuestion } from "src/app/feature/quiz-question/interface/quiz-question-interface"

export class QuestionModel{
    id!: string
    question_id!: string
    quiz_question!: quizQuestionInterface

}



 interface quizQuestionInterface {
    id: string,
    question_text: string,
    createdAt: string,
    updatedAt: string
    quiz_option: quiz_option []
}

export interface quiz_option {
    id?: string,
    option_text: string,
    is_img: boolean,
    is_correct: boolean,
    quiz_question_id?: string   
}