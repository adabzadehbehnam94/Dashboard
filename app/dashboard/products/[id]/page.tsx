"use client"
import ContextUser from "@/components/Contex"
import { useParams, useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

interface ProductData{
    producName? : string,
    category? : string,
    price : string,
    id : string,
    detail : string
}

export default function Product(){
    const [product , setproduct] = useState< any | ProductData>()
    const {RemoveProduct} = useContext<any>(ContextUser)
    
    const params = useParams()

    const router = useRouter()
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await fetch(`http://localhost:3001/products/${params.id}`)
            const result = await data.json()
            setproduct(result)
        }

        fetchdata()
        
    },[])
    
    return(
        <div>
            <p className="mb-5">نام کالا : {product?.producName}</p>
            <p className="mb-5"> شرح کالا : {product?.detail}</p>
            <p className="mb-5"> دسته بندی : {product?.category}</p>
            <p className="mb-5"> قیمت : {parseInt(product?.price).toLocaleString("fa-IR")} ریال</p>
            <button className="cursor-pointer ml-5 bg-blue-500 rounded-md px-2 py-1 text-white" onClick={()=> RemoveProduct(params.id)}>حذف کالا</button>
            <button className="cursor-pointer bg-blue-500 rounded-md px-2 py-1 text-white" onClick={()=> router.push(`/dashboard/products/${params.id}/editProduct`)}>ویرایش کالا</button>
        </div>
    )
}