"use client"
import { createContext, useEffect, useState } from "react"
import { buyProduct, logoutUser, presentUser, removeProduct, removeUser } from "./serverAction"
import { useRouter } from "next/navigation"


interface Child {
    children : React.ReactNode
}
export interface VAl  {
    user : {user : string} | null,
    handleUser : (item : {user : string})=> void,
    logout : ()=> void,
    Remove : (id : {id : string})=> void,
    category : {category : string} | null,
    id : string | undefined,
    buy : (id : {id : string},products : any )=> void,
    RemoveProduct : (id : {id : string})=> void

}

const ContextUser = createContext<VAl | null>(null)

export function Contex({children} : Child){
    const [user , setuser] = useState<any | null >(null)
    const [category , setCategory] = useState<{category : string} | null >(null)
    const [id , setId] = useState<string | undefined >(undefined)
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
                setId(cookie.id)
            }
        }

        me()

    },[user])

    const Remove = (id : {id : string}) =>{
        removeUser(id)
        router.push("/dashboard/users")
    }

    const RemoveProduct = (id : {id : string}) =>{
        removeProduct(id)
        router.push("/dashboard/products")
    }

    const buy = (id : {id : string},products : any)=>{
        buyProduct(id , products)
        router.push("/")
    }

    return(
        <ContextUser.Provider value={{user , handleUser ,logout , Remove , category,id,buy,RemoveProduct}}>
            {children}
        </ContextUser.Provider>
    )
}
export default ContextUser