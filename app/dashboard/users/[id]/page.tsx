import { prisma } from "@/lib/prisma"
import { ParamsId } from "../../products/[id]/page"
import Link from "next/link";
import RemoveButton from "@/components/removeButton";


export default async function Profile({params} : ParamsId){
  
  const {id} = await params
  

  const user = await prisma.users.findUnique({where : {id : Number(id)}})
 
    return(
        <div className="grid md:grid-cols-2  lg:grid-cols-3  gap-3">
          <div className="flex flex-row  md:border-l-2 border-gray-300 justify-start md:justify-center mb-5  px-2 ">
                <h4 className="ml-2">نام : </h4>
                <p className="overflow-hidden">{user?.firstName}</p>
            </div>
            <div className="flex flex-row   lg:border-l-2 border-gray-300 justify-start md:justify-center mb-5  px-2 ">
                <h4 className="ml-2">نام خانوادگی : </h4>
                <p className="overflow-hidden">{user?.lastName}</p>
            </div>
            <div className="flex flex-row md:border-l-2 lg:border-none border-gray-300  justify-start md:justify-center mb-5  px-2 ">
                <h4 className="ml-2">ایمیل : </h4>
                <p className="overflow-hidden">{user?.email}</p>
            </div>
            <div className="flex flex-row   justify-start md:justify-center mb-5 ">
                <RemoveButton id={Number(id)}/>
                <Link href={`/dashboard/users/${user?.id}/editUser`} className="rounded-md bg-blue-500 px-2 py-1  text-white hover:bg-blue-300">ویرایش</Link>
            </div>
        </div>
    )
}