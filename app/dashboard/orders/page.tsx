import Sidebar from "@/components/sidebar";

interface userdata {
    name : string,
    family : string,
    id : string,
    orders : []
}

const fetchdata = async()=>{
    const data = await fetch("http://localhost:3001/users")
    const result = await data.json()
    return result
}
export default async function Orders() {
    const data = await fetchdata()
    return (
        <div >
                { data.map((item : userdata)=>(
                    item?.orders && 
                    <div className="flex justify-between border-b-2 border-gray-300 py-3 md:px-5" key={item.id}>
                        <p>نام : {item.name}</p>
                        <p>نام خانوادگی :  {item.family}</p>
                        <p>تعداد سفارش ها : {item.orders.length}</p>
                        
                    </div>
                ))}
                
        </div>
    )
}