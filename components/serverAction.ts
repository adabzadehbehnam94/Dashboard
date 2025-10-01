"use server"

import { cookies } from "next/headers"
import { productsType } from "./Products"


interface State {
    name?: string,
    family?: string,
    email?: string,
    password?: string,
    success?: string | undefined,
    error?: string | undefined
}


interface Data {
    name: string,
    family: string,
    email: string,
    password: string | number
}



interface Formdata {
    get: (item: string) => any
}

export async function registerAction(state: State, formdata: Formdata): Promise<any> {
    const name = formdata.get("name")
    const family = formdata.get("family")
    const email = formdata.get("email")
    const password = formdata.get("password")
    const date = formdata.get("date")
    const category = formdata.get("category")

    if (name === "") {
        return {
            nameErr: "فیلد نام اجباریست"
        }
    }
    if (family === "") {
        return {
            familyErr: "فیلد نام خانوادگی اجباریست"
        }
    }
    if (email === "") {
        return {
            emailErr: "فیلد ایمیل اجباریست"
        }
    }
    if (password === "") {
        return {
            passwordErr: "فیلد رمز عبور اجباریست"
        }
    }

    const data = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            date: date,
            name: name,
            family: family,
            email: email,
            password: password,
            category : category
        })
    })
    const result = await data.json()

    if (data.ok) {
        return {
            success: "ثبت نام شما با موفقیت انجام شد"
        }
    } else {
        return {
            error: "ثبت نام انجام نشد"
        }
    }
}

export async function login(state: State, formdata: Formdata): Promise<any> {
    const email = formdata.get("email")
    const password = formdata.get("password")

    if (email === "") {
        return {
            emailErr: "فیلد ایمیل اجباریست"
        }
    }
    if (password === "") {
        return {
            passwordErr: "فیلد رمز عبور اجباریست"
        }
    }

    const fetchdata = await fetch("http://localhost:3001/users", {
        method: "GET",
        headers: { "content-type": "application/json" },
        cache: "no-store"
    })
    const data = await fetchdata.json()
    const cookie = await cookies()
    if (fetchdata.ok) {

        const matcher = data.find((item: Data) => item.email === email)
        if (matcher) {
            
            if (matcher.password === password) {
                cookie.set("name", matcher.name)
                cookie.set("category", matcher.category)
                cookie.set({
                    name : "user",
                    value : matcher.id,
                    httpOnly : true
                })

                // const test : any = cookie.get("user")?.value
                // console.log(test?.id);

                
                
                
                return {
                    user : matcher.name,
                    logSuccess: `خوش آمدید ${matcher.name}`
                }
            } else {
                return {
                    logPassword: "رمز عبور اشتباه است"
                }
            }
        } else {
            return {
                logError: "ایمیل نامعتبر است"
            }
        }

    } else {
        return {
            error: "ارور رخ داده است"
        }
    }
}

export const presentUser = async (): Promise<{ user?: string, category?: any, cookieError? : string, id? : string}> => {
    const cookie = await cookies()
    const name = cookie.get("name")
    const category = cookie.get("category")
    const user : any = cookie.get("user")
    
    
    if (name && category) {
        return {
            user: name.value,
            category: category.value,
            id : user.value
        }
    } else {
        return {
            cookieError: "لطفا وارد شوید یا ثبت نام کنید"
        }
    }
}

export const logoutUser = async () => {
    const cookie = await cookies()
    cookie.delete("name")
    cookie.delete("user")
    cookie.delete("category")
}


export async function productAction(state: productsType, formdata: Formdata): Promise<any> {
    const producName = formdata.get("producName")
    const price = formdata.get("price")
    // const image = formdata.get("image")
    const category = formdata.get("category")
    const Description = formdata.get("Description")

    if (producName === "") {
        return {
            nameErr: "فیلد نام اجباریست"
        }
    }
    if (price === "") {
        return {
            priceErr: "فیلد قیمت اجباریست"
        }
    }
    // if (image === null) {
    //     return {
    //         imageErr: "فیلد عکس اجباریست"
    //     }
    // }
    if (category === null) {
        return {
            categoryErr: "فیلد دسته بندی اجباریست"
        }
    }
    // const form = new FormData()
    // form.append("image" , image)
    // form.append("producName" , producName)
    // form.append("price" , price)
    // form.append("category" , category)

    const data = await fetch("http://localhost:3001/products", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
            producName: producName,
            price: price,
            // image : image,
            category: category,
            Description: Description
        })
        // body : form

    })
    const result = await data.json()
    // console.log(result);

    if (data.ok) {
        return {
            success: " محصول  با موفقیت ثبت شد"
        }
    } else {
        return {
            error: "ثبت محصول انجام نشد"
        }
    }
}

export const removeUser = async (id: { id: string }) => {
    const data = await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
        cache: "no-store"
    })

    if (data.ok) {
        return {
            removeSuccess: "کاربر حذف شد"
        }
    } else {
        return {
            removeError: "حذف کاربر انجام نشد"
        }
    }
}

export async function editUser(state: State, formdata: Formdata):Promise<any> {
    const name = formdata.get("name")
    const family = formdata.get("family")
    const email = formdata.get("email")
    const password = formdata.get("password")
    const date = formdata.get("date")
    const id = formdata.get("id")
    const category = formdata.get("category")

    if (name === "") {
        return {
            nameErr: "فیلد نام نباید خالی باشد"
        }
    }
    if (family === "") {
        return {
            familyErr: "فیلد نام خانوادگی نباید خالی باشد"
        }
    }
    if (email === "") {
        return {
            emailErr: "فیلد ایمیل نباید خالی باشد"
        }
    }
    if (password === "") {
        return {
            passwordErr: "فیلد رمز عبور نباید خالی باشد"
        }
    }
    const data = await fetch(`http://localhost:3001/users/${id}`, {
        method: "PUT",
        cache: "no-store",
        body : JSON.stringify({
            name : name,
            family : family,
            email : email ,
            password : password,
            date : date,
            category : category
        })
    })

     const result = await data.json()
     
     if(data.ok){
        return {
            editSuccess : "تغییرات با موفقیت اعمال شد"
        }
     }else{
        return {
            editError : "تغییرات انجام نشد"
        }
     }
}


export async function buyProduct(id : {id : string},products : any) {
    const oldOrders = await fetch(`http://localhost:3001/users/${id}`,{
        method : "GET",
        cache : "no-store"
    })

    const oldData = await oldOrders.json()
    
    const fetchdata = await fetch(`http://localhost:3001/users/${id}`,{
        method : "PATCH",
        cache : "no-store",
        body : JSON.stringify({
            orders : [...oldData.orders , ...products]
        })
    })


    if(fetchdata.ok){
        return {
            buySuccess : "سفارش شما با موفقیت ثبت شد"
        }
    }else{
        return{
            buyError : "خرید شما ثبت نشد"
        }
    }
}



