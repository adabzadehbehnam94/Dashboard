import { FetchProducts, productsType } from "@/components/Products";
import Sidebar from "@/components/sidebar";


export default async function Products() {
    const data = await FetchProducts()
    const categoryMobile = data.filter((item: productsType) => item.category === "موبایل")
    const categoryLaptop = data.filter((item: productsType) => item.category === "لپتاپ")
    const Accessories = data.filter((item: productsType) => item.category === "لوازم جانبی")
    return (
        <div>
                <div className="grid grid-cols-1  md:grid-cols-3 md:gap-3">

                    <div>
                        <p className="text-blue-500 mb-2">موبایل : </p>
                        {categoryMobile.map((item: productsType) => (
                            <div className="mb-1" key={item.id}>
                                <p>{item.producName}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-blue-500 mb-2">لپتاپ : </p>
                        {categoryLaptop.map((item: productsType) => (
                            <div className="mb-1" key={item.id}>
                                <p>{item.producName}</p>

                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-blue-500 mb-2">لوازم جانبی : </p>
                        {Accessories.map((item: productsType) => (
                            <div className="mb-1" key={item.id}>
                                <p>{item.producName}</p>

                            </div>
                        ))}
                    </div>

                </div>
            
        </div>
    )
}