import { createContext, useEffect, useState } from "react";


export const userContext=createContext();

export const Userwraper=({children})=>{

    const [currentUser,setCurrentuser]=useState(JSON.parse(localStorage.getItem('user')))
    
    useEffect(()=>{
          localStorage.setItem('user',JSON.stringify(currentUser));
    },[currentUser])

    return <userContext.Provider value={{currentUser,setCurrentuser}}>{children}</userContext.Provider>
}