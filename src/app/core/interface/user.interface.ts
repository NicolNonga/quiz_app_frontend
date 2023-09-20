export interface IUser{
     user:Iuser
    token?: IToken
}

  interface IToken{
        type: string,
        token: string,
        expires_at: string
  }

  interface Iuser{
    id?: number,
    username: string,
    user_type: string,
    is_deleted: boolean,
    created_at?: string,
    updated_at?: string
  }