"use client"

import { FetchProducts, productsType } from "@/components/Products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/components/ShopingCard";
import localFont from "next/font/local";
import card from '@/public/images/icons/cart-shopping-solid.svg'
import Image from "next/image";
import Link from "next/link";
const sansFaNumber = localFont({
    src : "../public/fonts/IRANSansWeb_FaNum.woff2"
  })

export default function Home() {
  
  const [product , setproduct] = useState<null | any>(null)
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetchdata = async() =>{
      const data = await FetchProducts()
      setproduct(data)
    }
    fetchdata()
  }, [])

  return (
    <div className=" grid grid-cols-2 mx-5 text-sm md:grid-cols-4">
      {product && product.map((item : productsType)=>(
        <div className="mb-5 shadow-2xl rounded-2xl p-3 ml-2" key={item.id}>
          <p className="mb-2 line-clamp-2 w-30 md:w-40 lg-w-50">{item.producName}</p>
          <p className={`${sansFaNumber.className} mb-2`}>قیمت : {parseInt(item.price).toLocaleString("fa-IR")} ریال</p>
          <Link href={`/${item.id}`}>جزئیات</Link>
          <button className="cursor-pointer" onClick={()=> {dispatch(add({name : item.producName , price : item.price , id : item.id}))}}><Image src={card} width={20} height={20} alt="card"/></button>
        </div>
      ))}
    </div>
  );
}
