"use client"

import { editProduct } from "@/components/serverAction"
import { useParams } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import localFont from "next/font/local"

const FaNumber = localFont({
    src : "../../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})



export default function EditProducts(){
    const [product , setproduct ] = useState< any>()
    const[selectedItem , setSelectedItem] = useState("")
    const params = useParams()
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await fetch(`http://localhost:3001/products/${params.id}`)
            const result = await data.json()
            setproduct(result)
            setSelectedItem(result.category)
           
        }
        fetchdata()
       
    },[])


    
    
    const [state , EditFormdata] =  useActionState(editProduct , {})
    

    return(
        <div>
            <form className="flex flex-col justify-start pb-5" action={EditFormdata}>
                <input type="hidden" name="id" defaultValue={product?.id} />
                <label className="mb-5" >نام کالا : </label>
                <input className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product?.producName} type="text" name="producName" />
                <label className="mb-5"  >شرح کالا : </label>
                <textarea className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product?.detail} name="detail" cols={30} rows={10}></textarea>
                <label className="mb-3">دسته بندی : </label>
                <select className="w-30 mb-3 bg-blue-500 rounded-md text-white px-2 py-1" name="category" id="1" value={selectedItem} onChange={e => setSelectedItem(e.target.value)}>
                    <option value="موبایل" key="1">موبایل</option>
                    <option value="لپتاپ" key="2">لپتاپ</option>
                    <option value="لوازم جانبی" key="3">لوازم جانبی</option>
                </select>
                <label className="mb-5">قیمت : </label>
                <input className={`mb-5 border-2 border-gray-300 rounded-md px-2 py-1 sm:w-50 ${FaNumber.className}`} type="number" defaultValue={product?.price}  name="price" />
                <button className="mb-5 bg-blue-500 rounded-md text-white px-2 py-1 sm:w-30 cursor-pointer" type="submit">ثبت ویرایش</button>
                {state?.success ? <p>{state?.success}</p> : <p>{state?.error}</p>}
            </form>
        </div>
    )
}