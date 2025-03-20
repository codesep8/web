import { Link, NavLink, useRouteLoaderData } from "react-router";
import { Button } from "~/components/ui/button";

export function Navbar() {
    const session = useRouteLoaderData("root");
    return (
        <nav className="backdrop-blur fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">Home</NavLink>
                </div>
                {session.isLoggedIn ?
                    <Link to="/auth/logout">{session.id}</Link>
                :
                    <Button asChild>
                        <Link to="/auth/login">login</Link>
                    </Button>
                }
            </div>
        </nav>
    )
}