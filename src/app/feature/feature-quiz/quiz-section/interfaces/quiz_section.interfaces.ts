import { Icategory } from "../../categoria/interface/category.interface"
import { QuizInterface } from "../../quiz/interface/quiz.interface"

export interface IQuizSection{
    id: string,
    name: string,
    category_id: string,
    quiz_id: string,
    createdAt: string,
    updatedAt: string
    category : Icategory
    quiz: QuizInterface
}

export interface IQuizSectionDTO {
    name: string,
    quiz_id: string,
    category_id: string
}