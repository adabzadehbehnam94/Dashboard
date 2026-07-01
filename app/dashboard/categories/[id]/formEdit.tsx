"use client"

import { categoryEditAction } from "@/components/serverAction"
import { prisma } from "@/lib/prisma"
import { useParams } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Data {
    data:Promise<{
        name: string,
        id: number
    }>
}

export default function FormEdit({ data }: any) {
    const params = useParams()
    const [state, formEdit] = useActionState(categoryEditAction, {})
    const [category, setCategory] = useState<null | Data>(null)
    
    useEffect(() => {
        if (state?.success) {
            toast.success(state?.success)
        } else {
            toast.error(state?.error)
        }
    }, [state])
    return (
        <>
            <form action={formEdit}>
                <label>نام دسته بندی : </label>
                <input type="hidden" name="id" defaultValue={data?.id} />
                <input defaultValue={data?.name} type="text" name="name" />
                <button className="rounded-md bg-blue-500 hover:bg-blue-300 text-white px-2 py-1">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </>
    )
}