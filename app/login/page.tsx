"use client"

import ContextUser, { VAl } from "@/components/Contex"
import { login } from "@/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useContext, useEffect } from "react"
// import  Style  from "@/app/login/login.module.css"

export default function Login(){
  const [state , formlogin] = useActionState(login , {})
  const router = useRouter()
  const {handleUser , category} = useContext<VAl | any>(ContextUser)
  useEffect(()=>{
    if( state?.logSuccess){
      router.push("/")
      handleUser(state?.user)
    }
  },[state])
  return(
    <div className="pt-5 ">
      <form className="flex  flex-col mx-auto w-80 md:w-100 bg-white rounded-xl p-10" action={formlogin}>
        <label className="mb-1" >ایمیل :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="email"  />
        <p>{state?.emailErr}</p>
        <br/>
        <label className="mb-1">رمز عبور :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="password" name="password" />
        <p>{state?.passwordErr}</p>
        <br/>
        <button className="cursor-pointer bg-blue-500 px-1 py-1 text-white rounded-xl w-20 justify-center" type="submit">ورود</button>
        <br/>
        <p>{state?.logSuccess}</p>
        <p>{state?.logError}</p>
        <p>{state?.error}</p>
        <p>{state?.logPassword}</p>

        <br/>
      <button className="bg-blue-500 rounded-xl px-2 py-1 text-white cursor-pointer" onClick={()=> router.push("/register")}>ورود به صفحه ثبت نام</button>
        
      </form>
      
      
    </div>
  )
}