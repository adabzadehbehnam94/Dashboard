import { FetchProducts, productsType } from "@/components/Products";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";
import Add from "@/public/images/icons/add.png"


export default async function Products() {
    const data = await FetchProducts()
    const categoryMobile = data.filter((item : productsType) => item.category === "موبایل")
    const categoryLaptop = data.filter((item : productsType) => item.category === "لپتاپ")
    const Accessories = data.filter((item : productsType) => item.category === "لوازم جانبی")
    return (
        <div className="grid grid-cols-4 gap-3">
            <div>
                <Sidebar />
                <Link className="flex mb-5" href={"/dashboard/products/importProduct"}><Image className="ml-3" src={Add} width={20} height={20} alt="image"/> ایجاد محصول جدید</Link>
            </div>
            <div>
                {categoryMobile.map((item : productsType) =>(
                    <div key={item.id}>
                        <p>{item.producName}</p>
                    </div>
                ))}
            </div>
            <div>
                {categoryLaptop.map((item : productsType) =>(
                    <div key={item.id}>
                        <p>{item.producName}</p>
                        
                    </div>
                ))}
            </div>
            <div>
                {Accessories.map((item : productsType) =>(
                    <div key={item.id}>
                        <p>{item.producName}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}