import { getSession, destroySession } from "~/service/session.server";
import type { Route } from "./+types/auth.logout";
import { redirect, Form, Link } from "react-router";
  export async function action({
    request,
  }: Route.ActionArgs) {
    const session = await getSession(
      request.headers.get("Cookie")
    );
    return redirect("/auth/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
  
  export default function LogoutRoute() {
    return (
      <>
        <p>Are you sure you want to log out?</p>
        <Form method="post">
          <button>Logout</button>
        </Form>
        <Link to="/">Never mind</Link>
      </>
    );
  }
  