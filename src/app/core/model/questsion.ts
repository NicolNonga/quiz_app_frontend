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
    quiz_attachment_option: quiz_attachemntOption[]
}

export interface quiz_attachemntOption{
    id: string
    quiz_option_id: string
    quiz_attachment_id: string

    quiz_attacment:quiz_attacment 

}

export interface quiz_attacment{
    id: string
    file_path: string
    file_name: string,
    createdAt: Date
    updatedAt: Date

}