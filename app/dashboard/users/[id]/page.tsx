"use client"
import { Params } from "next/dist/server/request/params"
import { useParams, useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import ContextUser, { VAl } from "@/components/Contex"

export default function Profile(){
  const params =  useParams<{id : string}>()
  const [user , setuser] = useState<{name : string , family : string , email : string , id:string | number} | null>()
  const {Remove} = useContext<VAl | any>(ContextUser)
  const router = useRouter()
  useEffect(()=>{
    const fetchData = async()=>{
        const data = await fetch(`http://localhost:3001/users/${params.id}`)
        const result = await data.json()
        setuser(result)
    }
    fetchData()
    
  },[])
    
    return(
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-row borde-solid border-l-1 justify-center ">
            <h4 className="ml-2">نام : </h4>
            <p>{user?.name}</p>
          </div>
          <div className="flex flex-row borde-solid border-l-1 justify-center ">
            <h4 className="ml-2">نام خانوادگی : </h4>
            <p>{user?.family}</p>
          </div>
          <div className="flex flex-row borde-solid border-l-1 justify-center ">
            <h4 className="ml-2">ایمیل : </h4>
            <p>{user?.email}</p>
          </div>
          <div className="flex flex-row  justify-center ">
            <button onClick={()=> Remove(user?.id)} className="rounded-xl ml-3 bg-red-500 px-3 cursor-pointer text-white hover:bg-red-300">حذف</button>
            <button onClick={()=> router.push(`/dashboard/users/${params.id}/editUser`)} className="rounded-xl bg-blue-500 px-3 cursor-pointer text-white hover:bg-blue-300">ویرایش</button>
          </div>
        </div>
    )
}