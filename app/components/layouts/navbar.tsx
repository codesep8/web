import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav className="backdrop-blur fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">Home</NavLink>
                </div>
                <NavLink to="/auth/login" className="font-bold">login</NavLink>
            </div>
        </nav>
    )
}