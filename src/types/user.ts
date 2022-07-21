export interface UserState{
    
    user: [];
}
export interface IUser{
    userName: string;
    userPhone: string;
    userMail: string;
    userCompany: string;
}
export enum UserActionTypes  {
    ADD_USER= "ADD_USER",
}

interface AddUserAction{
    type: UserActionTypes.ADD_USER
    payload: any
}
export type UserAction = AddUserAction