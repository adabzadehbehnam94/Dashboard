
export interface productsType {
    id ? : string | number ,
    producName : string,
    price : string | Number | BigInt,
    image? : any,
    categoryId? : number,
    detail ? : string
}

export async function FetchProducts() {
    const fetchdata = await fetch("http://localhost:3001/products")
    const result = await fetchdata.json()
    return result
}