"use client"

import { useSelector } from "react-redux"
import localFont from "next/font/local"

const IransansFaNamber = localFont({
    src : "../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function Card() {
    const selector = useSelector((state: { card: any }) => state.card)
    return (
        <div className={`flex grid-cols-2 gap-3 ${IransansFaNamber.className}`}>
            <div>
                {selector.products.map((item: { name: string, price: number | string, id: number | string }) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
            <div>
                <p>تعداد کالا :  {selector.count}</p>
                <p>قیمت کل : {selector.total} ریال</p>
            </div>

        </div>
    )
}