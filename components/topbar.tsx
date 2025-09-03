"use client"

import { useContext } from "react"
import ContextUser from "./Contex"
import { VAl } from "./Contex"
import Link from "next/link"


export default function Topbar() {
    const { user , logout} = useContext<VAl | any>(ContextUser)
    return (
        <>
            {user ? (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center">
                    <div className="flex h-10">
                        <Link className="ml-10" href={"/dashboard"}>{user}</Link>
                        <button type="button" onClick={logout}>خروج</button>
                    </div>
                </header>
            ) : (
                <header className="bg-blue-500 px-20 h-20  flex  text-white items-center">
                    <div className="flex h-10">
                        <Link className="ml-10" href={"/login"}>ورود</Link>
                        <Link href={"/register"}>ثبت نام</Link>
                    </div>
                </header>
            )}
        </>
    )
}