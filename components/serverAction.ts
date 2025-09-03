"use server"

import { cookies } from "next/headers"



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
            name: name,
            family: family,
            email: email,
            password: password
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
        headers: { "Accept": "application/json" },
        cache: "no-store"
    })
    const data = await fetchdata.json()
    const cookie = await cookies()
    if (fetchdata.ok) {

        const matcher = data.find((item: Data) => item.email === email)
        if (matcher) {
            cookie.set("name" , matcher.name)
            if (matcher.password === password) {
                cookie.set("name" , matcher.name )
                return {
                    user : matcher.name,
                    logSuccess: `خوش آمدید ${matcher.name}`
                }
            }else{
                return{
                    logPassword : "رمز عبور اشتباه است"
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

export const presentUser = async () : Promise<{user ?: any  , cookieError? : string}> =>{
            const cookie = await cookies()
            const result = cookie.get("name")
            if(result){
               return {
                user : result.value
               }
            }else{
                return {
                    cookieError : "لطفا وارد شوید یا ثبت نام کنید"
                }
            }
        }

export const logoutUser = async ()  =>{
            const cookie = await cookies()
            cookie.delete("name")
        }        