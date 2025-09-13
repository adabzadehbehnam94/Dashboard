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
        <div className="mx-auto">

            <form action={formRegister}>
                <input value={date} type="hidden" name="date" />
                <br/>
                <label>نام : </label>
                <input type="text" name="name" />
                <p>{state?.nameErr}</p>
                <br />
                <label>نام خانوادگی : </label>
                <input type="text" name="family" />
                <p>{state?.familyErr}</p>
                <br />
                <label>ایمیل: </label>
                <input type="text" name="email" />
                <p>{state?.emailErr}</p>
                <br />
                <label>رمز عبور : </label>
                <input type="password" name="password" />
                <p>{state?.passwordErr}</p>
                <br/>
                <button type="submit">ثبت نام</button>
                <br />
                <p>{state?.success}</p>
                <p>{state?.error}</p>
            </form>

        </div>
    )
}