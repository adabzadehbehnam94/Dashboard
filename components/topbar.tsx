"use client"

import { useContext } from "react"
import ContextUser from "./Contex"
import { VAl } from "./Contex"
import Link from "next/link"



export default function Topbar() {
    const { user , logout , category} = useContext<VAl | any>(ContextUser)
    console.log(category);
    
    return (
        <>
            {user ? (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center mb-5">
                    <div className="flex h-10">
                        <Link className="ml-10" href={category === "admin" ? "/dashboard/overview" : "/profile"}>{user}</Link>
                        <button type="button" onClick={logout}>خروج</button>
                    </div>
                </header>
            ) : (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center mb-5">
                    <div className="flex h-10">
                        <Link className="ml-10" href={"/login"}>ورود</Link>
                        <Link href={"/register"}>ثبت نام</Link>
                    </div>
                </header>
            )}
        </>
    )
}