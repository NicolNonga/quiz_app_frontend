export interface QuizInterface{
    id?: string
    name: string,
    topic: string,
    createdAt: string,
    updatedAt: string
}

export interface QuizDTO {
    name: string,
    topic: string
}