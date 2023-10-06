export interface IQuizQuestion{

       quizQuestion: quizQuestionInterface []
}



export interface quizQuestionInterface {
    id: string,
    question_text: string,
    createdAt: string,
    updatedAt: string
}