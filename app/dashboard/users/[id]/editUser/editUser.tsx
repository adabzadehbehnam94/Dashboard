"use client"
import { ToastContainer, toast } from "react-toastify"
import { useActionState, useEffect, useState } from "react"
import { editUser } from "@/components/serverAction"
import { useRouter } from "next/navigation"

export interface UserDetails{
    user : {
        id : number,
        firstName : string,
        lastName : string,
        email : string,
        password : string
    }
}

export default function EditUserForm({user} : UserDetails ) {
    const [state, EditForm] = useActionState(editUser, {})
    const router = useRouter()
    useEffect(() => {
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
        if (state?.editError) {
            toast.error(state.editError)
        }
        if (state?.editSuccess) {
            toast.success(state.editSuccess)
            setTimeout(() => {
                router.push("/dashboard/users")
            }, 2000);
        }

    }, [state])

    return (
        <>
            <form className="mb-5 flex flex-col w-70 mx-auto md:w-70 md:mr-10 lg:mr-5 " action={EditForm}>
                
                <input defaultValue={user?.id} type="hidden" name="id" />

                <label className="mb-5" htmlFor="">نام : </label>

                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.firstName} name="name" />

                <label className="mb-5" htmlFor="">نام خانوادگی : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.lastName} name="family" />

                <label className="mb-5" htmlFor="">ایمیل : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={user?.email} name="email" />


                <label htmlFor="">رمز عبور : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" defaultValue={user?.password} type="password" name="password" />


                <button  className="cursor-pointer mb-5 bg-blue-500 rounded-md text-white px-2 py-1 w-30">ثبت ویرایش</button>

            </form>
            <ToastContainer />
        </>
    )
}