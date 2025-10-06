"use client"
import { registerAction } from "@/components/serverAction"
import { useActionState, useEffect, useState } from "react"

export default function AddUser() {
    const [state, formRegister] = useActionState(registerAction, {})
     const [date , setdate] = useState<any | string>('')
    useEffect(()=>{
        const date = new Date()
        const curent = date.getMonth()
        setdate(curent)
    },[])
    
    return (
        <div >
            
            <form className="flex flex-col w-70 mx-auto sm:mr-5" action={formRegister}>
                <input defaultValue={date} type="hidden" name="date" />
                <label>نام : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="name" />
                <p>{state?.nameErr}</p>
                <br />
                <label>نام خانوادگی : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="family" />
                <p>{state?.familyErr}</p>
                <br />
                <label>ایمیل: </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="email" />
                <p>{state?.emailErr}</p>
                <br />
                <label>رمز عبور : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="password" name="password" />
                <p>{state?.passwordErr}</p>
                <br/>
                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-20" type="submit">ثبت کاربر</button>
                <br />
                <p>{state?.success}</p>
                <p>{state?.error}</p>
            </form>

        </div>
    )
}