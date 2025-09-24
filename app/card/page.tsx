"use client"

import { useSelector } from "react-redux"
import localFont from "next/font/local"
import { useContext, useEffect } from "react"
import ContextUser, { VAl } from "@/components/Contex"
import Link from "next/link"

const IransansFaNamber = localFont({
    src: "../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function Card() {
    const selector = useSelector((state: { card: any }) => state.card)
    const { user, id,buy } = useContext<VAl | any>(ContextUser)
    
    
    return (
        <div className={`flex grid-cols-2 gap-3 ${IransansFaNamber.className}`}>
            <div>
                {selector.products.map((item: { name: string, price: string, id: number | string }) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{parseInt(item.price).toLocaleString("fa-IR")}</p>
                    </div>
                ))}
            </div>
            <div>
                <p>تعداد کالا :  {selector.count}</p>
                <p>قیمت کل : {selector.total} ریال</p>
                {user ? <>
                    <button onClick={()=> buy(id , selector.products)} className="cursor-pointer ml-3">خرید</button>
                    <button className="cursor-pointer">حذف محصولات</button>
                </> :
                    <Link href={"/login"}>ورود</Link>}
            </div>

        </div>
    )
}