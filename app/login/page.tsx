"use client"

import ContextUser, { VAl } from "@/components/Contex"
import { login } from "@/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useContext, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';

export default function Login(){
  const [state , formlogin] = useActionState(login , {})
  const router = useRouter()
  const {handleUser} = useContext<VAl | any>(ContextUser)
  useEffect(()=>{
    if(state?.emailErr){
      toast.error(state.emailErr)
    }
    if(state?.passwordErr){
      toast.error(state.passwordErr)
    }
    if(state?.logError){
      toast.error(state.logError)
    }
    if(state?.logPassword){
      toast.error(state.logPassword)
    }
    if(state?.error){
      toast.error(state.error)
    }
    if( state?.logSuccess){
      toast.success(state.logSuccess)
      router.push("/dashboard/overview")
      handleUser(state?.user)

    }
    
  },[state])
  return(
    <div className="pt-5 ">
      <form className="flex  flex-col mx-auto w-80 md:w-100 bg-white rounded-xl p-10 gap-3" action={formlogin}>
        <label className="mb-1" >ایمیل :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="email"  />
        
        
        <label className="mb-1">رمز عبور :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="password" name="password" />
        
        
        <button className="cursor-pointer bg-blue-500 px-1 py-1 text-white rounded-xl w-20 justify-center" type="submit">ورود</button>
        
        
        
      <button className="bg-blue-500 rounded-xl px-2 py-1 text-white cursor-pointer" onClick={()=> router.push("/register")}>ورود به صفحه ثبت نام</button>
        
      </form>
      
      <ToastContainer/>
    </div>
  )
}