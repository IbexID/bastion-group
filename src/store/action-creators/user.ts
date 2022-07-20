import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../../types/user';
export const addUser = (userInfo: {}) => {
    return (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.ADD_USER, payload: { ...userInfo } })

        } catch (e) {
            console.log(e)
        }
    }
}