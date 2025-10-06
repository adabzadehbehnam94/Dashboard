"use client"
import { registerAction } from "@/components/serverAction"
import { useActionState, useEffect, useState } from "react"

export default function Register() {
    const [state, formRegister] = useActionState(registerAction, {})
    const [date , setdate] = useState<any | string>('')
    useEffect(()=>{
        const date = new Date()
        const curent = date.getMonth()
        setdate(curent)
    },[])
    return (
        <div className="mx-auto">

            <form className="flex  flex-col mx-auto w-80 md:w-100 bg-white rounded-xl p-10" action={formRegister}>
                <input defaultValue={date} type="hidden" name="date" />
                <input type="hidden" name="category" defaultValue={"normal"} />
                <label className="mb-1">نام : </label>
                <input type="text" className="border-2 border-gray-300 rounded-xl px-3 py-2" name="name" />
                <p>{state?.nameErr}</p>
                <br />
                <label className="mb-1">نام خانوادگی : </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="family" />
                <p>{state?.familyErr}</p>
                <br />
                <label className="mb-1">ایمیل: </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="email" />
                <p>{state?.emailErr}</p>
                <br />
                <label className="mb-1">رمز عبور : </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="password" name="password" />
                <p>{state?.passwordErr}</p>
                <br/>
                <button className="cursor-pointer bg-blue-500 px-1 py-1 text-white rounded-xl w-20 justify-center" type="submit">ثبت نام</button>
                <br />
                <p>{state?.success}</p>
                <p>{state?.error}</p>
            </form>

        </div>
    )
}