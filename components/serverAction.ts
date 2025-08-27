"use server"

import { promises } from "dns"
import { json } from "stream/consumers"

interface State{
    name? : string ,
    family? : string ,
    email? : string ,
    password?  :string,
    success?: string | undefined,
    error? : string | undefined
}

interface Formdata {
    get : (item : string)=> any
}

export async function registerAction(state : State , formdata  : Formdata): Promise<any> {
    const name = formdata.get("name")
    const family = formdata.get("family")
    const email = formdata.get("email")
    const password = formdata.get("password")

    if (name === ""){
        return {
            nameErr : "فیلد نام اجباریست"
        }
    }
    if (family === ""){
        return {
            familyErr : "فیلد نام خانوادگی اجباریست"
        }
    }
    if (email === ""){
        return {
            emailErr : "فیلد ایمیل اجباریست"
        }
    }
    if (password === ""){
        return {
            passwordErr :"فیلد رمز عبور اجباریست"
        }
    }

    const data = await fetch("http://localhost:3001/users",{
        method:"POST",
        headers : {
            "content-type"  : "application/json"
        },
        body : JSON.stringify({
            name : name,
            family : family,
            email : email,
            password : password
        })
    })
    const result = await data.json()

    if(data.ok){
        return {
            success : "ثبت نام شما با موفقیت انجام شد"
        }
    }else{
        return{
            error : "ثبت نام انجام نشد"
        }
    }
}