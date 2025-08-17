
import { NextResponse } from "next/server";

export function middleware(request : any){
    return NextResponse.redirect(new URL("/register",request.url))
}

export const config = {
    matcher : '/register/:path*'
}