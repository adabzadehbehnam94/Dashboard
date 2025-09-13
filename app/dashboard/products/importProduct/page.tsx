"use client"

import { productAction } from "@/components/serverAction"
import { useActionState, useState } from "react"
import localFont from "next/font/local"

const IransansFaNumber = localFont({
    src: "../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})


export default function ImportProduct() {
    const [state, formProduct] = useActionState(productAction, {})

    return (
        <div>
            <form className="w-[200px]" action={formProduct}>
                <label htmlFor="producName">نام محصول :</label>
                <input name="producName" type="text" />
                <br />
                <label htmlFor="price">قیمت محصول :</label>
                <input className={IransansFaNumber.className} name="price" type="number" />
                <br />
                <label>شرح محصول</label>
                <textarea name="Description" cols={30} rows={10}></textarea>
                <br />
                <label >دسته بندی</label>
                <select name="category" id="1">
                    <option value="موبایل" key="1">موبایل</option>
                    <option value="لپتاپ" key="2">لپتاپ</option>
                    <option value="لوازم جانبی" key="3">لوازم جانبی</option>
                </select>
                <br />
                <br />
                <button type="submit">ثبت محصول</button>
                <br />
                <p>{state?.success}</p>
                <p>{state?.error}</p>


            </form>
        </div>
    )
}