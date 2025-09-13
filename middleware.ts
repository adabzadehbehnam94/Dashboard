
import { NextResponse } from "next/server";

export function middleware(request: {
    url: string,
    cookies: any,
    get: string
}) {
    const cookie = request.cookies.get("name")

    if (!cookie) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: '/dashboard/:path*'
}