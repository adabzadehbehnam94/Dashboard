"use client"
import { registerAction } from "@/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function AddUser() {
    const [state, formRegister] = useActionState(registerAction, {})
    
     
    useEffect(()=>{
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.familyErr) {
            toast.error(state.familyErr)
        }
       
        if (state?.emailErr) {
            toast.error(state.emailErr)
        }
        if (state?.passwordErr) {
            toast.error(state.passwordErr)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
        }
    },[state])
    
    return (
        <div >
            
            <form className="flex flex-col w-70 mx-auto sm:mr-5" action={formRegister}>
                
                <label>نام : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="name" />
                
                <br />
                <label>نام خانوادگی : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="family" />
                
                <br />
                <label>ایمیل: </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="email" />
                
                <br />
                <label>رمز عبور : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="password" name="password" />
                
                <br/>
                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-20" type="submit">ثبت کاربر</button>
                <br />
                
            </form>
            <ToastContainer/>
        </div>
    )
}