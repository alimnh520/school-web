import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const pathName = request.nextUrl.pathname;
  const token = request.cookies.get("school-admin")?.value;

  if (token && (pathName.startsWith("/login") || pathName.startsWith("/reset-pass"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathName.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      console.log("✅ Token Valid:", payload);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/reset-pass", "/dashboard", "/dashboard/:path*"],
};
