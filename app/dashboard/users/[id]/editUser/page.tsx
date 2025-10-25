"use client"

import { useActionState, useEffect, useState } from "react"
import { editUser } from "@/components/serverAction"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

interface User {
    name : string,
    family : string,
    email : string,
    password : string | number,
    id : string | number,
    category : Category
}

enum Category {
    normal= "mormal",
    admin = "admin"
}

export default function EditUser(){
   const [state , EditForm] = useActionState(editUser , {})
   const params = useParams()
   const [user , setuser] = useState< User | null>(null)
   const [date , setdate] = useState<any | string>('')
   const router = useRouter()
   useEffect(()=>{
    const fetchData = async()=>{
        const data = await fetch(`http://localhost:3001/users/${params.id}`)
        const result = await data.json()
        setuser(result)
        const date = new Date()
        const curent = date.getMonth()
        setdate(curent)
    }
    fetchData()
   },[])
    return(
        <div>

            <form className="mb-5 flex flex-col w-70 mx-auto md:w-70 md:mr-10 lg:mr-5 " action={EditForm}>
                <input defaultValue={date} type="hidden" name="date" />
                
                <input defaultValue={user?.id} type="hidden" name="id" />
                
                <label className="mb-5" htmlFor="">نام : </label>
            
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.name} name="name" />
            
                <label className="mb-5" htmlFor="">نام خانوادگی : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.family} name="family" />
            
                <label className="mb-5" htmlFor="">ایمیل : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.email} name="email" />
            
                <label className="mb-5" htmlFor="">نوع کاربر : </label>
                <select className="mb-5 bg-blue-500 rounded-md text-white px-2 py-1 w-30" name="category" id="1">
                    <option value="normal" key="1">عادی</option>
                    <option value="admin" key="2">ادمین</option>
                </select>
            
                <label htmlFor="">رمز عبور : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" defaultValue={user?.password} type="password"  name="password" />
            

                <button onClick={()=> router.push("/dashboard/users")} className="cursor-pointer mb-5 bg-blue-500 rounded-md text-white px-2 py-1 w-30">ثبت ویرایش</button>

                <p>{state?.editSuccess}</p>
                <p>{state?.editError}</p>
            </form>
        </div>
    )
}