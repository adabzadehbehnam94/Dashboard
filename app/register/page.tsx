import { registerAction } from "@/components/serverAction"
import { useActionState } from "react"

export default function Register() {
    const [state , formRegister ] =useActionState(registerAction , {})
    return (
        <div className="mx-auto">
            
            <form action="">
                <input type="text" name="name" />
                <input type="text" name="family" />
                <input type="text" name="email" />
                <input type="password" name="password" />
                <button type="button">ثبت نام</button>
            </form>
          
        </div>
    )
}