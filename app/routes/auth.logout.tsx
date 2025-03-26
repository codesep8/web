import { getSession, destroySession } from "~/service/session.server";
import type { Route } from "./+types/auth.logout";
import { redirect, Form, Link } from "react-router";
import { Button } from "~/components/ui/button"

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/auth/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}
  
export default function LogoutRoute() {
  return (
    <>
      <h1 className="text-3xl">logout</h1>
      <Form method="post">
        <Button>go</Button>
      </Form>
      <Link to="/">Never mind</Link>
    </>
  );
}