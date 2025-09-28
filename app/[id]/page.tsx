"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
interface User {
    producName : string ,
    category : Cat,
    price : any,
    id : string
}

enum Cat {
    laptop = "لپتاپ",
    mobile = "موبایل",
    accessory = "لوازم جانبی"
}

export default function Product(){
   const params = useParams()
   const [user , setuser] = useState<User | null>(null)
   useEffect(()=>{
    const fetchUser = async()=>{
        const data = await fetch(`http://localhost:3001/products/${params.id}`)
        const result = await data.json()
        setuser(result)
    }
    fetchUser()
   },[])
    return(
        <div>
            <p>{user?.producName}</p>
            <p>{parseInt(user?.price).toLocaleString("fa-IR")}</p>
            <p>{user?.category}</p>
        </div>
    )
}