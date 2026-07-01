"use client"
import { registerAction } from "@/components/serverAction"
import { useRouter } from "next/navigation";
import { useActionState, useEffect} from "react"
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const [state, formRegister] = useActionState(registerAction, {})
    const router = useRouter()
    useEffect(() : any =>{
        if(state?.nameErr){
             toast.error(state.nameErr)
        }
        if(state?.familyErr){
             toast.error(state.familyErr)
        }
        if(state?.emailErr){
             toast.error(state.emailErr)
        }
        if(state?.passwordErr){
             toast.error(state.passwordErr)
        }
        if(state?.error){
             toast.error(state.error)
        }
        if(state?.success){
             toast.success(state.success)
            setTimeout(() => {
                router.push("/")
            }, 2000);
        }
       
    },[state])
    
    return (
        <div className="mx-auto">

            <form className="flex  flex-col mx-auto w-80 md:w-100 bg-white rounded-xl p-10" action={formRegister}>
                
                <label className="mb-1">نام : </label>
                <input type="text" className="border-2 border-gray-300 rounded-xl px-3 py-2" name="name" />
                
                <br />
                <label className="mb-1">نام خانوادگی : </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="family" />
                
                <br />
                <label className="mb-1">ایمیل: </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="email" />
                
                <br />
                <label className="mb-1">رمز عبور : </label>
                <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="password" name="password" />
                
                <br/>
                <button className="cursor-pointer bg-blue-500 px-1 py-1 text-white rounded-xl w-20 justify-center" type="submit">ثبت نام</button>
                <br />
                
            </form>
            <ToastContainer/>
        </div>
    )
}