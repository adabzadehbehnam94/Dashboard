"use client"

import { useRouter } from "next/navigation"

export default function Login(){
  const router = useRouter()
  return(
    <div className="mx-auto w-200">
      <form className="flex flex-col" action="">
        <label htmlFor="name">نام :</label>
        <input className="border-1 border-black rounded-xl" type="text" name="name"  />
        <input type="text" name="email" />
        <input type="password" name="password" />
        <br/>
        <button type="button">ورود</button>
      </form>
      <br/>
      <button onClick={()=> router.push("/register")}>ورود به صفحه ثبت نام</button>
    </div>
  )
}