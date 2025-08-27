
import { NextResponse } from "next/server";

export function middleware(request : {
    url : string
}){
    return NextResponse.redirect(new URL("/dashboard",request.url))
}

export const config = {
    matcher : '/'
}