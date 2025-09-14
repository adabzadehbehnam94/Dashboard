"use client"
import { createContext, useEffect, useState } from "react"
import { logoutUser, presentUser, removeUser } from "./serverAction"
import { useRouter } from "next/navigation"


interface Child {
    children : React.ReactNode
}
export interface VAl  {
    user : {user : string} | null,
    handleUser : (item : {user : string})=> void,
    logout : ()=> void,
    Remove : (id : {id : string})=> void,
    category : {category : string} | null
}

const ContextUser = createContext<VAl | null>(null)

export function Contex({children} : Child){
    const [user , setuser] = useState<any | null >(null)
    const [category , setCategory] = useState<{category : string} | null >(null)
    const router =useRouter()
    const handleUser = (item : {user : string}) =>{
        setuser(item)
    }

    const logout = () =>{
        setuser(null)
        logoutUser()
        router.push("/login")
    }
    useEffect(()=>{
        const me = async ()=>{
            const cookie = await presentUser()
            if(cookie){    
                setuser(cookie.user)
                setCategory(cookie.category)
            }
        }

        me()

    },[user])

    const Remove = (id : {id : string}) =>{
        removeUser(id)
        router.push("/dashboard/users")
    }

    return(
        <ContextUser.Provider value={{user , handleUser ,logout , Remove , category}}>
            {children}
        </ContextUser.Provider>
    )
}
export default ContextUser