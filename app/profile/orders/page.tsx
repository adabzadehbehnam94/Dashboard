"use client"

import ContextUser from "@/components/Contex"
import { useContext, useEffect, useState } from "react"

export default function Orders(){
    const {id} = useContext<any>(ContextUser)
    const [user , setuser] = useState<null | {orders : object[]}>(null)
    useEffect(()=>{
        const fetchUser = async()=>{
            const data = await fetch(`http://localhost:3001/users/${id}`)
            const result = await data.json()
            setuser(result)
        }
        fetchUser()
    },[])
    return(
        <div>
            {user?.orders.map((item : any)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}