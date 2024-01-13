import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { errorToken } from "./app/actions";
// import { getToken } from "./app/actions";

export async function middleware(request: NextRequest) {
  const auth = cookies().get("auth");
  const valueAuth = auth?.value;
  // console.log(auth?.value);

  if (request.nextUrl.pathname.startsWith("/login") && valueAuth == "true") {
    console.log("Login");

    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    valueAuth == "false"
  ) {
    console.log("No Login");

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// export const config = {
//   matcher: ["/dashboard/:path*", "/login"],
// };
