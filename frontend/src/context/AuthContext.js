import {createContext, useReducer} from 'react'

export const AuthContext = createContext()

export const authReducer =(state, action)=>{
    switch(action.type){
        
    }
}

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer,{
        user:null
    })
}