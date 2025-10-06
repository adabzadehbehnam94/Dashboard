"use client"
import { ChartUser } from "@/components/charts";
import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Plus from "../../../public/images/icons/plus.png"
import Image from "next/image";

export default function Users() {
    const [users, setusers] = useState<[] | null>(null)
    const [count, setcount] = useState<number | null>(null)
    const [search, setsearch] = useState("")
    useEffect(() => {
        const fetchUser = async () => {
            const data = await ChartUser()
            setusers(data)
            setcount(data.length)
        }

        fetchUser()
    }, [])

    const filter = users?.filter((item: { name: string }) => {
        const word = item.name.split('')
        const word2 = word[0] + word[1]
        return word[0] === search || word2 === search || item.name === search
    })
    console.log(filter);


    return (
        <div >

            <div className="grid sm:grid-cols-2">
                <div className="order-last sm:order-first mb-5">
                    <p className="text-blue-500">تعداد کاربران : {count}</p>
                    <br />
                    {search === "" ?
                        users?.map((item: { id: string | number, name: string, family: string }) => (
                            <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.name}</div>
                                <div>{item.family}</div>
                            </Link>
                        ))

                        :

                        filter?.map((item: { id: string | number, name: string, family: string }) => (
                            <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.name}</div>
                                <div>{item.family}</div>
                            </Link>
                        ))
                    }

                </div>
                <div className="order-first sm:order-last mb-5">
                    <label>جست و جو : </label>
                    <input onChange={(item) => setsearch(item.target.value)} className="border-2 border-gray-300 px-2 py-1 rounded-md" type="search" name="search" placeholder="نام کاربر" />
                </div>
            </div>

        </div>
    )
}