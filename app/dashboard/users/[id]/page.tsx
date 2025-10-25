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
        <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-3">
          <div className="flex flex-row  md:border-l-2 border-gray-300 justify-start md:justify-center mb-5  px-2 ">
            <h4 className="ml-2">نام : </h4>
            <p className="overflow-hidden">{user?.name}</p>
          </div>
          <div className="flex flex-row   lg:border-l-2 border-gray-300 justify-start md:justify-center mb-5  px-2 ">
            <h4 className="ml-2">نام خانوادگی : </h4>
            <p className="overflow-hidden">{user?.family}</p>
          </div>
          <div className="flex flex-row md:border-l-2 lg:border-none border-gray-300  justify-start md:justify-center mb-5  px-2 ">
            <h4 className="ml-2">ایمیل : </h4>
            <p className="overflow-hidden">{user?.email}</p>
          </div>
          <div className="flex flex-row   justify-start md:justify-center mb-5 ">
            <button onClick={()=> Remove(user?.id)} className="rounded-xl ml-3 bg-red-500 px-3 cursor-pointer text-white hover:bg-red-300">حذف</button>
            <button onClick={()=> router.push(`/dashboard/users/${params.id}/editUser`)} className="rounded-xl bg-blue-500 px-3 cursor-pointer text-white hover:bg-blue-300">ویرایش</button>
          </div>
        </div>
    )
}