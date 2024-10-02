import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup =()=>{
    const [error,setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async(email, password)=>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('api/user/signup',{
            method: 'POST',
            headers :{'Content-type':'application/json'},
            body : JSON.stringify({email,password})
        })
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage 
            localStorage.setItem('user',JSON.stringify(json))

            // update the auth context
            dispatch({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }
        // here we are returniing isloading and error so that in case if there is some error we can grab it.
    return {signup , isLoading, error}
}