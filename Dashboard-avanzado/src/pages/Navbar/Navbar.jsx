import { Input } from "@/components/ui/Input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { UserButton } from "@clerk/clerk-react";
import { Menu, Search } from "lucide-react";

export function Navbar() {
  return (
    <div className="flex  items-center px-6  gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu  className=" h-8 w-8"/>
          </SheetTrigger>
          <SheetContent side="left">
            <p>side bar routes</p>
            <p>aqui van otras rutas </p>
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
