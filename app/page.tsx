"use client"

import { FetchProducts, productsType } from "@/components/Products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/components/ShopingCard";

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
    <div >
      {product && product.map((item : productsType)=>(
        <div key={item.id}>
          <p>{item.producName}</p>
          <p>{item.price}</p>
          <button className="cursor-pointer" onClick={()=> {dispatch(add({name : item.producName , price : item.price , id : item.id}))}}>اضافه کردن به سبد خرید</button>
        </div>
      ))}
    </div>
  );
}
