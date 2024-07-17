import { Icategory } from "src/app/feature/feature-quiz/categoria/interface/category.interface"
import { QuizInterface } from "src/app/feature/feature-quiz/quiz/interface/quiz.interface"

export  interface QuizSectionUserModel {
    id: string,
    name: string,
    category_id: string,
    quiz_id: string,
    createdAt: string,
    updatedAt: string
    category : Icategory
    quiz: QuizInterface
}
export interface Iquiz{
    id: string,
    name: string,
    createdAt: Date
    updatedAt: Date
}
export interface QuizSectionList {
      _value : Array<QuizSectionUserModel>
}