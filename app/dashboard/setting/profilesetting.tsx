"use client"
import { editUser } from "@/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"




interface Admin{
    admin : {
        id : number
        firstName : string,
        lastName : string,
        email : string,
        password : string
    }
}

export default function ProfileSetting({admin} : Admin){
    const [state , profileAction] = useActionState(editUser , {})
    // const router = useRouter()
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
            }
        })
    return(
        <>
            <h3>تنظیمات پروفایل</h3>
                <form  action={profileAction}>
                    <input type="hidden" defaultValue={admin.id} name="id"/>
                    <label>نام</label>
                    <input type="text" defaultValue={admin.firstName} name="firstName"/>
                    <br />
                    <label >نام خانوادگی</label>
                    <input type="text" defaultValue={admin.lastName} name="lastName"/>
                    <br />
                    <label >ایمیل</label>
                    <input type="text" defaultValue={admin.email} name="email"/>
                    <br />
                    <label >رمز عبور</label>
                    <input type="password" defaultValue={admin.password} name="password"/>
                    <button type="submit">ثبت ویرایش</button>
                </form>
                <ToastContainer/>
        </>
    )
}