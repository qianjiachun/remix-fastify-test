import { createCookieSessionStorage } from "@remix-run/node";

let sessionSecret = "123"

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});
