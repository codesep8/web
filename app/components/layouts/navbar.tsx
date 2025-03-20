import { Link, NavLink, useRouteLoaderData } from "react-router";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";

export function Navbar() {
    const session = useRouteLoaderData("root");
    return (
        <nav className="backdrop-blur fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">Home</NavLink>
                    <div className="hidden md:flex ml-6 space-x-4">
                        <Separator orientation="vertical" />
                        <Link to="/RecenteChanges" className="text-sm font-medium hover:text-primary">
                            rr
                        </Link>
                    </div>
                </div>
                {session.isLoggedIn ?
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="d" />
                                <AvatarFallback>.</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>{session.id}</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Link to="/auth/logout">logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                :
                    <Button asChild>
                        <Link to="/auth/login">login</Link>
                    </Button>
                }
            </div>
        </nav>
    )
}