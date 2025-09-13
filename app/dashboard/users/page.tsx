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
        <div className="grid grid-cols-4 gap-3">
            <div className="col-span-1">
                <Sidebar />
                <Link className="flex mb-5" href={"/dashboard/users/addUser"}><Image  className="ml-3" src={Plus} width={20} height={20} alt="image"/>ایجاد کاربر جدید</Link>
            </div>
            <div className="col-span-3">
                <div className="grid grid-cols-2">
                    <div>
                        <p>تعداد کاربران : {count}</p>
                        <br />
                        {search === "" ?
                            users?.map((item: { id: string | number, name: string, family: string }) => (
                                <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3" key={item.id}>
                                    <div className="ml-2">{item.name}</div>
                                    <div>{item.family}</div>
                                </Link>
                            ))

                            :
                            
                            filter?.map((item: { id: string | number, name: string, family: string }) => (
                                <div className="flex flex-row mb-3" key={item.id}>
                                    <div className="ml-2">{item.name}</div>
                                    <div>{item.family}</div>
                                </div>
                            ))
                        }

                    </div>
                    <div>
                        <label>جست و جو : </label>
                        <input onChange={(item) => setsearch(item.target.value)} className="border-1 border-solid p-1" type="search" name="search" placeholder="نام کاربر" />
                    </div>
                </div>

            </div>
        </div>
    )
}