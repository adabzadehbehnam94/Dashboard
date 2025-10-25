"use client"

import { productAction } from "@/components/serverAction"
import { useActionState, useState } from "react"
import localFont from "next/font/local"
import Sidebar from "@/components/sidebar"

const IransansFaNumber = localFont({
    src: "../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})


export default function ImportProduct() {
    const [state, formProduct] = useActionState(productAction, {})

    return (
        <div >

            <form className=" sm:mr-5" action={formProduct}>
                <label >نام محصول :</label>
                <input name="producName" className="border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2" type="text" />
                <br />
                <label >قیمت محصول :</label>
                <input className={`${IransansFaNumber.className} border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2`} name="price" type="number" />
                <br />
                <label>شرح محصول :</label>
                <textarea className="border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2" name="Description" cols={30} rows={10}></textarea>
                <br />
                <label >دسته بندی : </label>
                <select className=" cursor-pointer bg-blue-500 text-white pr-2 py-1 rounded-md" name="category" id="1">
                    <option value="موبایل" key="1">موبایل</option>
                    <option value="لپتاپ" key="2">لپتاپ</option>
                    <option value="لوازم جانبی" key="3">لوازم جانبی</option>
                </select>
                <br />
                <br />
                <button className="mb-10 bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer" type="submit">ثبت محصول</button>

                <p>{state?.success}</p>
                <p>{state?.error}</p>
            </form>

        </div>
    )
}