"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Image from "next/image"
import Purchase from "@/public/images/icons/icons8-purchase-48.png"
import favorite from "@/public/images/icons/icons8-favorite-48.png"
import favoriteRed from "@/public/images/icons/icons8-favorite-48-red.png"
import { add } from "@/components/ShopingCard"


interface User {
    producName: string,
    category: Cat,
    price: any,
    id: string,
    detail: string
}

enum Cat {
    laptop = "لپتاپ",
    mobile = "موبایل",
    accessory = "لوازم جانبی"
}

export default function Product() {
    const params = useParams()
    const [user, setuser] = useState<User | null>(null)
    const [clamp, setclamp] = useState<string | null>("line-clamp-4")
    const [favoriteState, setfavoriteState] = useState<any>(favorite)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUser = async () => {
            const data = await fetch(`http://localhost:3001/products/${params.id}`)
            const result = await data.json()
            setuser(result)
        }
        fetchUser()
    }, [])
    return (
        <div className=" mx-5 md:grid md:grid-cols-4 md:gap-5">
            <div className="md:col-span-3">
                <p className="mb-5">{user?.producName}</p>
                <p className="mb-5">قیمت :  {parseInt(user?.price).toLocaleString("fa-IR")}</p>
                <p className="mb-5">دسته بندی : {user?.category}</p>
                {user?.detail &&
                    <>
                        <p className={`mb-5 text-justify text-base/7 ${clamp}`}>{user?.detail}</p>
                        <button onClick={() => setclamp(clamp ? null : "line-clamp-4")} className="cursor-pointer text-blue-600 mb-5" >{clamp ? "بیشتر" : "بستن"}</button>
                    </>
                }
            </div>

            <div className="flex  md:h-10 md:col-span-1">
                <button className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded-xl ml-5" onClick={() => { dispatch(add({ name: user?.producName, price: user?.price, id: user?.id })) }}> افزودن به سبد خرید</button>
                <button onClick={() => setfavoriteState(favoriteState === favorite ? favoriteRed : favorite)} className="cursor-pointer"><Image src={favoriteState} width={25} height={25} alt="favorite" /></button>
            </div>


        </div>
    )
}