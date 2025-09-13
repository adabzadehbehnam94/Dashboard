"use client"

import { useActionState, useEffect, useState } from "react"
import { editUser } from "@/components/serverAction"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function EditUser(){
   const [state , EditForm] = useActionState(editUser , {})
   const params = useParams()
   const [user , setuser] = useState<{name : string , family :string , email : string ,password : string | number , id : string | number} | null>(null)
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

            <form action={EditForm}>
                <input value={date} type="hidden" name="date" />
                <br/>
                <input value={user?.id} type="hidden" name="id" />
                <br/>
                <label htmlFor="">نام : </label>
                <input type="text" placeholder={user?.name} name="name" />
                <br/>
                <label htmlFor="">نام خانوادگی : </label>
                <input type="text" placeholder={user?.family} name="family" />
                <br/>
                <label htmlFor="">ایمیل : </label>
                <input type="text" placeholder={user?.email} name="email" />
                <br/>
                <label htmlFor="">رمز عبور : </label>
                <input type="password"  name="password" />
                <br/>

                <button onClick={()=> router.push("/dashboard/users")} className="cursor-pointer">ثبت ویرایش</button>

                <p>{state?.editSuccess}</p>
                <p>{state?.editError}</p>
            </form>
        </div>
    )
}