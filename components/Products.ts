
export interface productsType {
    id : string ,
    producName : string,
    price : string,
    // image? : any,
    category? : string 
}

export async function FetchProducts() {
    const fetchdata = await fetch("http://localhost:3001/products")
    const result = await fetchdata.json()
    return result
}