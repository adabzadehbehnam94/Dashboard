"use client"
import { createContext, useEffect, useState } from "react"
import { logoutUser, presentUser } from "./serverAction"


interface Child {
    children : React.ReactNode
}
export interface VAl  {
    user : {user : string} | null,
    handleUser : (item : {user : string})=> void,
    logout : ()=> void
}

const ContextUser = createContext<VAl | null>(null)

export function Contex({children} : Child){
    const [user , setuser] = useState<{user : string} | null >(null)
    const handleUser = (item : {user : string}) =>{
        setuser(item)
    }

    const logout = () =>{
        setuser(null)
        logoutUser()
    }

    useEffect(()=>{
        const me = async ()=>{
            const cookie = await presentUser()
            if(cookie){    
                setuser(cookie?.user)
            }
        }

        me()

    },[])

    return(
        <ContextUser.Provider value={{user , handleUser ,logout}}>
            {children}
        </ContextUser.Provider>
    )
}
export default ContextUser