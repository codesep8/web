import { NavLink, Link, useRouteLoaderData } from "react-router";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const links = [
    { to: "/board", label: "게시판" }
]

export function Navbar() {
    const { config } = useRouteLoaderData("root");
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">{config.sitename}</NavLink>
                    <Links />
                </div>
                <div className="flex items-center space-x-4">
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="d" />
                                <AvatarFallback>.</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>dd</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Link to="/auth/logout">logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <MobileLinks />
                </div>
            </div>
        </nav>
    )
}

function Links() {
    return (
        <div className="hidden md:flex ml-6 space-x-4">
            {links.map((link) => (
                <NavLink key={link.to} to={link.to} className="text-lg font-medium">{link.label}</NavLink>
            ))}
        </div>
    )
}

function MobileLinks() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="dmd:hidden">
                    <Menu />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>메뉴</DrawerTitle>
                </DrawerHeader>
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} className="text-lg font-medium">{link.label}</NavLink>
                ))}
            </DrawerContent>
        </Drawer>
    )
};