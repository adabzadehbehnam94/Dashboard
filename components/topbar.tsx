"use client"

import { useContext } from "react"
import ContextUser from "./Contex"
import { VAl } from "./Contex"
import Link from "next/link"
import { useSelector } from "react-redux"
import cart from "@/public/images/icons/icons8-shopping-cart-48.png"
import Image from "next/image"



export default function Topbar() {
    const { user, logout, category } = useContext<VAl | any>(ContextUser)
    const selector = useSelector((state: { card: any }) => state.card)
    return (
        <>
            {user ? (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center mb-5">
                    <div className="flex h-10">
                        <Link className="ml-10" href={category === "admin" ? "/dashboard/overview" : "/profile"}>{user}</Link>
                        <button type="button" className="cursor-pointer ml-10" onClick={logout}>خروج</button>
                        <div className="relative">
                            <Link href={"/card"}><Image alt="card" src={cart} width={30} height={30} /></Link>
                            {selector.count > 0 && <p className="absolute -bottom-1  -left-2 bg-red-500 rounded-2xl px-2 text-xs">{selector.count.toLocaleString("fa-IR")}</p>}
                        </div>
                    </div>
                </header>
            ) : (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center mb-5">
                    <div className="flex h-10">
                        <Link className="ml-10" href={"/login"}>ورود</Link>
                        <Link className="ml-10" href={"/register"}>ثبت نام</Link>
                        <div className="relative">
                            <Link href={"/card"}><Image alt="card" src={cart} width={30} height={30} /></Link>
                            {selector.count > 0 && <p className="absolute -bottom-1  -left-2 bg-red-500 rounded-2xl px-2">{selector.count.toLocaleString("fa-IR")}</p>}
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}