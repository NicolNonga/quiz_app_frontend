export interface IQuizQuestion{

       quizQuestion: quizQuestionInterface []
}



export interface quizQuestionInterface {
    id: string,
    question_text: string,
    createdAt: string,
    updatedAt: string
    quiz_option?: quiz_option
}

interface quiz_option {
    id?: string,
    option_text: string,
    is_img: boolean,
    is_correct: boolean,
    quiz_question_id?: string   
}