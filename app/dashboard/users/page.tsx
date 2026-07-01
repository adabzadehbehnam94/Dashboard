import { prisma } from "@/lib/prisma"
import UsersDetails from "./usersDetails";

export default async function Users() {   
    const users = await prisma.users.findMany()
    return (
        <div >
            <UsersDetails users={users}/>
        </div>
    )
}