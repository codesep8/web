import { redirect, data } from "react-router"
import { getSession, commitSession } from "~/service/session.server"
import type { Route } from "./+types/auth.login"

export async function loader({ request }: Route.LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));
  
    if (session.has("userID")) {
      return redirect("/");
    }
  
    return data(
      { error: session.get("error") },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
}

export async function action({ request }: Route.ActionArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    const form = await request.formData();
    const userId = form.get("userId") as string;
    if (userId !== "hi") {
        session.flash("error", "userid not exist");
        return redirect("/auth/login", {
            headers: {
              "Set-Cookie": await commitSession(session),
            },
        });
    };
    session.set("userId", userId);
    session.set("username", "testuser");
    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

export default function LogInPage({ loaderData }: Route.ComponentProps) {
    const { error } = loaderData;
    return (
        <div>
            {error ? <div className="text-red-500">{error}</div> : null}
            <form method="POST">
                <div>
                    <p>Please sign in</p>
                </div>
                <label>
                    Username: <input type="text" name="userId" />
                </label>
                <label>
                    Password:{" "}
                    <input type="password" name="password" />
                </label>
                <button role="submit">submit</button>
            </form>
        </div>
    )
}