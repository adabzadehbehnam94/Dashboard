"use client"

import Sidebar from "@/components/sidebar";
// import { LineChart, Line, XAxis, YAxis,Legend, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
// import { ChartUser } from "@/components/charts";
import { useEffect, useState } from "react";
import { log } from "console";
import { FetchProducts } from "@/components/Products";
import { allCategories, allProducts, allUsers } from "@/components/serverAction";
// type User = {
//     name ? : string , 
//     count? : number
// }[]

export default  function Overview() {
        const [user , setuser] = useState<any>(null)
        const [product , setproduct] = useState<any>(null)
        const [categories , setcategories] = useState<any>(null)
        useEffect(()=>{
                const data = async()=>{
                    const result = await allUsers()
                    const resultProduct = await allProducts()
                    const resultcategories = await allCategories()
                    setuser(result)
                    setproduct(resultProduct)
                    setcategories(resultcategories)
                    // setorders(()=>{
                    //     const Orders : object[] = []
                    //     result.map((item : {orders : object[]}) =>{
                    //         item?.orders && Orders.push(...item.orders)
                    //     })

                    //     return Orders.length
                    // })

                }

                data()
        },[])

        // console.log(orders);
        

    // const data  = [{name : "فروردین" , count : 5}, {name : "اردیبهشت" , count : 2},{name : "خرداد" , count : 10}]

    return (
        <div className="grid md:grid-cols-3">
                        <p>تعداد کاربران : {parseInt(user).toLocaleString("fa-IR")}</p>
                        <p>تعداد محصولات : {parseInt(product).toLocaleString("fa-IR")}</p>
                        <p> دسته بندی ها : {parseInt(categories?.length).toLocaleString("fa-IR")}</p>
                        {/* <LineChart width={300} height={200} data={data}>
                            <CartesianGrid />
                            <Line dataKey="count" />
                            
                        </LineChart> */}

        </div>
    )
}