"use client"

import Sidebar from "@/components/sidebar";
// import { LineChart, Line, XAxis, YAxis,Legend, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartUser } from "@/components/charts";
import { useEffect, useState } from "react";
// type User = {
//     name ? : string , 
//     count? : number
// }[]

export default  function Overview() {
        const [user , setuser] = useState<any>(null)
        useEffect(()=>{
                const data = async()=>{
                    const result = await ChartUser()
                    setuser(result.length)
                }

                data()
        },[])

    // const data  = [{name : "فروردین" , count : 5}, {name : "اردیبهشت" , count : 2},{name : "خرداد" , count : 10}]

    return (
        <div >
                        <p>تعداد کاربران : {user}</p>
                        {/* <LineChart width={300} height={200} data={data}>
                            <CartesianGrid />
                            <Line dataKey="count" />
                            
                        </LineChart> */}

        </div>
    )
}