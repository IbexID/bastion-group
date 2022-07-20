

import { UserAction, UserActionTypes, UserState } from "../../types/user";



const initialState: UserState = {
    user: []
}

export const userReducer = (state = initialState, action: UserAction): UserState =>{
    switch(action.type){
        case UserActionTypes.ADD_USER:
            return state.user ?  {...state, user: action.payload} :  {user: action.payload}
        default:
            return state;
    }
}