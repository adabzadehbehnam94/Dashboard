"use client"

import ContextUser, { VAl } from "@/components/Contex"
import { login } from "@/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useContext, useEffect } from "react"

export default function Login(){
  const [state , formlogin] = useActionState(login , {})
  const router = useRouter()
  const {handleUser} = useContext<VAl | any>(ContextUser)
  useEffect(()=>{
    if(state?.logSuccess){
      router.push("/dashboard/overview")
      handleUser(state?.user)
    }
  },[state])
  return(
    <div className="mx-auto w-200">
      <form className="flex flex-col" action={formlogin}>
        <label >ایمیل :</label>
        <input className="border-1 border-black rounded-xl" type="text" name="email"  />
        <p>{state?.emailErr}</p>
        <br/>
        <label >رمز عبور :</label>
        <input className="border-1 border-black rounded-xl" type="password" name="password" />
        <p>{state?.passwordErr}</p>
        <br/>
        <button type="submit">ورود</button>
        <br/>
        <p>{state?.logSuccess}</p>
        <p>{state?.logError}</p>
        <p>{state?.error}</p>
        <p>{state?.logPassword}</p>
        
      </form>
      
      <br/>
      <button onClick={()=> router.push("/register")}>ورود به صفحه ثبت نام</button>
    </div>
  )
}