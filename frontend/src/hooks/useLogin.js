import { useState } from "react";

export const useLogin =()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null);

    const login =async (email,password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('api/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(true);
            setError(json.error)
        }
        if(response.ok){
            // save to local storage 
            localStorage.setItem('user',JSON.stringify(json))

            // update the auth
            dispatchEvent({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }
    return {login , error, isLoading}
    
}