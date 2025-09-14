"use client"
import Image from "next/image";
import Link from "next/link";
import Overview from "../public/images/icons/analysis.png"
import Users from "../public/images/icons/team.png"
import Products from "../public/images/icons/products.png"
import Setting from "../public/images/icons/settings.png"
import Orders from "../public/images/icons/order.png"


export default function SidebarProfile() {
    return (
        <section className="flex flex-col w-50">
            <Link className="flex mb-5 tex-left" href={"/dashboard/orders"}><Image className="ml-3" src={Orders} alt="icon" width={20} height={20} />سفارش ها</Link>
            <Link className="flex mb-5" href={"/dashboard/setting"}><Image className="ml-3" src={Setting} alt="icon" width={20} height={20} />تنضیمات</Link>
        </section>)
}