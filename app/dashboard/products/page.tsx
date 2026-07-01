import { productsType } from "@/components/Products";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";


export default async function Products() {
    const data = await prisma.products.findMany()
    const dataCategory = await prisma.categories.findMany()

    const categoryMobile = data.filter((item: productsType) => item.categoryId === 2)
    const categoryLaptop = data.filter((item: productsType) => item.categoryId === 1)
    const Accessories = data.filter((item: productsType) => item.categoryId === 3)
    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-3 md:gap-3">
                {dataCategory.map((item: { name: string, id: number }) => (

                    <div key={item.id}>
                        <p className="text-blue-500 mb-2">{item.name} : </p>
                        {data.map((product : productsType) =>(
                            product.categoryId === item.id && 

                            <Link href={`/dashboard/products/${product.id}`} className="mb-1" key={product.id}>
                                <p>{product.producName}</p>
                                {product?.image && <Image src={product?.image} alt="image_product" width={40} height={40} />}
                            </Link>
                        ))}

                    </div>
                ))}

                 {/* {categoryMobile.map((item: productsType) => (
                            <Link href={`/dashboard/products/${item.id}`} className="mb-1" key={item.id}>
                                <p>{item.producName}</p>
                                {item?.image && <Image src={item?.image} alt="image_product" width={40} height={40} />}
                            </Link>
                        ))} */}


                {/* <div>
                        <p className="text-blue-500 mb-2">لپتاپ : </p>
                        {categoryLaptop.map((item: productsType) => (
                            <Link href = {`/dashboard/products/${item.id}`} className="mb-1" key={item.id}>
                                <p>{item.producName}</p>
                                {item?.image && <Image src={item?.image} alt="image_product" width={40} height={40}/>}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <p className="text-blue-500 mb-2">لوازم جانبی : </p>
                        {Accessories.map((item: productsType) => (
                            <Link href = {`/dashboard/products/${item.id}`} className="mb-1" key={item.id}>
                                <p>{item.producName}</p>
                                {item?.image && <Image src={item?.image} alt="image_product" width={40} height={40}/>}

                            </Link>
                        ))}
                    </div> */}

            </div>

        </div>
    )
}