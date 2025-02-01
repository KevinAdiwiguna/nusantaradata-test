import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request: NextRequest) {
  const authToken = (await cookies()).get("authToken");

  if (authToken && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!authToken && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", '/'],
};
