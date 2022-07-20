export interface UserState{
    
    user: [];
}
export enum UserActionTypes  {
    ADD_USER= "ADD_USER",
}

interface AddUserAction{
    type: UserActionTypes.ADD_USER
    payload: any
}
export type UserAction = AddUserAction