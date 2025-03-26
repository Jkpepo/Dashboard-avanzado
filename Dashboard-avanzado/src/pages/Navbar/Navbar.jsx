import { Input } from "@/components/ui/Input";
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "@/components/ui/Sheet";
import { UserButton } from "@clerk/clerk-react";
import { Menu, Search } from "lucide-react";
import { SideBar } from "../SideBar";


export function Navbar() {
  return (
    <div className="flex  items-center px-2  gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className=" sm:block">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu  className=" lg:hidden  h-8 w-8"/>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="flex justify-center mt-2 ">Titulito</SheetTitle>
          <div className="">

            <SideBar/>
          </div>
       
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Buscar..." className="rounded-lg" />
        <Search  className="absolute top-2 right-2 "  />
      </div>
      <div className="flex gap-x-4 items-center">
        <p>tooglle</p>
        <UserButton />
      </div>
    </div>
  );
}
