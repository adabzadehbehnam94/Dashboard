"use client"

import { editProduct } from "@/components/serverAction"
import { useParams } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import localFont from "next/font/local"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

const FaNumber = localFont({
    src: "../public/fonts/IRANSansWeb_FaNum.woff2"
})



interface FormDetail {
    product: {
        producName: string | undefined,
        detail: string | undefined,
        price: number | undefined,
        id: string | number,
        categoryId: number | undefined,
        image? : string | null
    }

    category : object[]
}

// interface categoryType{
//     category : object[]
// }




export default function Form({ product , category}: FormDetail) {
    const [selectedItem, setSelectedItem] = useState(product.categoryId)
    const [state, EditFormdata] = useActionState(editProduct, {})
    const router = useRouter()


    useEffect(() => {
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.priceErr) {
            toast.error(state.priceErr)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
            setTimeout(() => {
                router.push("/dashboard/products")
            }, 2000);
        }
    }, [state])
    return (
        <div>
            <form className="flex flex-col justify-start pb-5" action={EditFormdata}>
                <input type="hidden" name="id" defaultValue={product.id} />
                {product?.image && <input type="hidden" name="oldImage" defaultValue={product.image} />}
                <label className="mb-5" >نام کالا : </label>
                <input className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product.producName} type="text" name="producName" />
                <label className="mb-5"  >شرح کالا : </label>
                <textarea className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product.detail} name="detail" cols={30} rows={10}></textarea>
                <br />
                <label>تصویر کالا : </label>
                <Image src={`${product.image}`} alt="imageProduct" width={40} height={40} />
                <input type="file" name="image" />
                <br />
                <label className="mb-3">دسته بندی : </label>
                <select className="w-30 mb-3 bg-blue-500 rounded-md text-white px-2 py-1" name="category" defaultValue={selectedItem} onChange={e => setSelectedItem(Number(e.target.value))}>
                    {category.map((item: any) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                <label className="mb-5">قیمت : </label>
                <input className={`mb-5 border-2 border-gray-300 rounded-md px-2 py-1 sm:w-50 ${FaNumber.className}`} type="number" defaultValue={product.price} name="price" />
                <button className="mb-5 bg-blue-500 rounded-md text-white px-2 py-1 sm:w-30 cursor-pointer" type="submit">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </div>
    )
}