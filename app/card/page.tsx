"use client"

import { useDispatch, useSelector } from "react-redux"
import localFont from "next/font/local"
import { useContext, useEffect } from "react"
import ContextUser, { VAl } from "@/components/Contex"
import Link from "next/link"
import { removeAll, removeOne } from "@/components/ShopingCard"

const IransansFaNamber = localFont({
    src: "../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function Card() {
    const selector = useSelector((state: { card: any }) => state.card)
    const { user, id, buy } = useContext<VAl | any>(ContextUser)
    const dispatch = useDispatch()


    return (
        <>
            {selector.products.length === 0 ? <div className="text-center">محصولی وجود ندارد</div> :
                <div className={`flex sm:grid-cols-2 grid grid-cols-1 gap-3 container mx-auto px-5 sm:px-0  ${IransansFaNamber.className}`}>
                    <div className="order-end sm:order-first mb-5">
                        {selector.products.map((item: { name: string, price: string, id: number | string }) => (
                            <div className="mb-3" key={item.id}>
                                <p className="mb-3">{item.name}</p>
                                <p className="mb-3">{parseInt(item.price).toLocaleString("fa-IR")} ریال </p>
                                <button onClick={()=> dispatch(removeOne({id : item.id}))} className="cursor-pointer bg-blue-500 text-white rounded-md px-2 py-1">حذف محصول</button>
                            </div>
                        ))}
                    </div>
                    <div className="order-first border-b-2 sm:border-none border-gray-300  sm:order-end">
                        <p className="mb-5">تعداد کالا :  {selector.count}</p>
                        <p className="mb-5">قیمت کل : {selector.total} ریال</p>
                        {user ?
                            <div className="mb-3">
                                <button onClick={() => buy(id, selector.products)} className="cursor-pointer ml-3 bg-green-500 rounded-md px-2 py-1 text-white">خرید</button>
                                <button onClick={()=> dispatch(removeAll())} className="cursor-pointer bg-red-500 rounded-md px-2 py-1 text-white">حذف محصولات</button>
                            </div>

                            :
                            <Link className="bg-blue-500 text-white rounded-md px-2 py-1 " href={"/login"}>ورود</Link>
                        }
                    </div>
                </div>
            }
        </>
    )
}