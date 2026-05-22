import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./src/lib/auth";  // FIXED PATH

export async function proxy(request) {
    const session = await auth.api.getSession({ request });

    if (session) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: [
        "/add-car",
        "/my-bookings",
        "/my-cars",
        "/explore/:path*",
    ],
};