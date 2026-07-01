"use client"
import { editWebSetting } from "@/components/serverAction"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Web{
    webDetail : {
        webName : string,
        detail : string,
        logo : string,
        id : number
    }
}

export default function WebSetting({webDetail} : Web ){
    const[state , webAcion] = useActionState(editWebSetting , {})
    const [changeImage , setChangeImage] = useState("logo")
    const [Imagebox , setImageBox] = useState(false)

    useEffect(()=>{
        if(state?.success){
            toast.success(state.success)
        }else{
            toast.error(state.error)
        }
    },[state])


    const imageButton = ()=>{
        setImageBox(!Imagebox)
        setChangeImage(Imagebox ? "oldLogo" : "logo")
    }

    return(
        <>
            <h3>تنظیمات سایت</h3>
            
                <form action={webAcion}>
                    <input type="hidden" defaultValue={webDetail.id} name="id" />
                    <input type="hidden" defaultValue={webDetail.logo} name="oldLogo" />
                    <label >نام سایت : </label>
                    <input defaultValue={webDetail.webName} name="webName" className="rounded-md border-black border-2 px-2 py-1" type="text" />
                    <br />
                    
                    <label >توضیحات سایت : </label>
                    <textarea defaultValue={webDetail.detail} name="detail" className="rounded-md border-black border-2 px-2 py-1" ></textarea>
                    <label>لوگو : </label>
                    {/* <input name={changeImage} defaultValue={webDetail.logo} type="text" /> */}
                    {/* <button onClick={imageButton} className="bg-blue-500 cursor-pointer text-white rounded-md">تغییر لوگو</button> */}
                    <input name="logo" type="file" />
                    <Image src={webDetail.logo} width={40} height={40} alt="logo"/>
                    <button type="submit">ثبت ویرایش</button>
                </form>
                <ToastContainer/>
        </>
    )
}