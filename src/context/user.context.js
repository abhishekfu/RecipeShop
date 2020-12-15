import React,{createContext,useReducer} from 'react';
import reducer from '../reducer/user.reducer';
export const UserContext =  createContext();

export function UserProvider({children}){
    const initialState={
        user:'',
        isAuthenticated:false
    }
    const [userCredentials,dispatch]=useReducer(reducer,initialState);
    return(
        <UserContext.Provider value={{userCredentials,dispatch}}>{children}</UserContext.Provider>
    )
}
