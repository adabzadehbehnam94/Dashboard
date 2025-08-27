"use client"
import { registerAction } from "@/components/serverAction"
import { useActionState } from "react"

export default function Register() {
    const [state , formRegister ] =useActionState(registerAction , {})
    return (
        <div className="mx-auto">
            
            <form action={formRegister}>
                <input type="text" name="name" />
                <p>{state?.nameErr}</p>
                <input type="text" name="family" />
                <p>{state?.familyErr}</p>
                <input type="text" name="email" />
                <p>{state?.emailErr}</p>

                <input type="password" name="password" />
                <p>{state?.passwordErr}</p>

                <button type="submit">ثبت نام</button>
                <br/>
                <p>{state?.success}</p>
                <p>{state?.error}</p>
            </form>
          
        </div>
    )
}