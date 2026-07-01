import { ParamsId } from "@/app/dashboard/products/[id]/page"
import { prisma } from "@/lib/prisma"
import EditUserForm from "./editUser"


interface User {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        id: number
}



export default async function EditUser({ params }: ParamsId) {
    const { id } = await params
    const userInformation : User | null = await prisma.users.findUnique({ where: { id: Number(id) } })
    if(!userInformation){
        return "کاربر مورد نظر وجود ندارد"
    }

    return (
        <div>
            <EditUserForm user={userInformation} />
        </div>
    )
}