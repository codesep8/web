import { NavLink } from "react-router";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">홈</NavLink>
                    <Links />
                </div>
                <div className="flex items-center space-x-4">
                    <MobileLinks />
                </div>
            </div>
        </nav>
    )
}

function Links() {
    return (
        <div className="hidden md:flex ml-6 space-x-4">
            <NavLink to="/board" className="text-lg font-medium">게시판</NavLink>
        </div>
    )
}

function MobileLinks() {
    return (
        <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>메뉴</DrawerTitle>
    </DrawerHeader>
      <div>
        링크
      <DrawerClose>
        <Button variant="outline">닫기</Button>
      </DrawerClose>
      </div>
  </DrawerContent>
</Drawer>
)
};