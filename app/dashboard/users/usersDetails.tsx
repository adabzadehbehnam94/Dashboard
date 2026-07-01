"use client"
import Link from "next/link"
import { useState } from "react"
import localFont from "next/font/local"

interface Userdata {
    users: {
        id: number,
        firstName: string,
        lastName: string
    }[]
}

const faNumber = localFont({
    src : "../../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function UsersDetails({ users }: Userdata) {

    const [search, setsearch] = useState("")

    const filter = users?.filter((item: { firstName: string }) => {
        const word = item.firstName.split('')
        const word2 = word[0] + word[1]
        return word[0] === search || word2 === search || item.firstName === search
    })

    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div className="order-last sm:order-first mb-5">
                    <p className={`text-blue-500 ${faNumber.className}`}>تعداد کاربران : {users.length}</p>
                    <br />
                    {search === "" ?
                        users?.map((item: { id: string | number, firstName: string, lastName: string }) => (
                            <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.firstName}</div>
                                <div>{item.lastName}</div>
                            </Link>
                        ))

                        :

                        filter?.map((item: { id: string | number, firstName: string, lastName: string }) => (
                            <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.firstName}</div>
                                <div>{item.lastName}</div>
                            </Link>
                        ))
                    }

                </div>
                <div className="order-first sm:order-last mb-5">
                    <label>جست و جو : </label>
                    <input onChange={(item) => setsearch(item.target.value)} className="border-2 border-gray-300 px-2 py-1 rounded-md" type="search" name="search" placeholder="نام کاربر" />
                </div>
            </div>
        </>
    )
}