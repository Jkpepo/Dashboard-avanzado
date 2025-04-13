import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/Sheet";
import { UserButton} from "@clerk/clerk-react";
import { Menu, Search } from "lucide-react";
import { SideBar } from "../SideBar";
import { ChangeTheme } from "../../componentsApp/ChangeTheme";




export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const handleSheetChange = (open) => {
    setIsOpen(open); 
  };

  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-gray-100 border-b h-20  dark:bg-gray-900">
      <div className="sm:block">
        <Sheet open={isOpen} onOpenChange={handleSheetChange}>
          <SheetTrigger className="flex items-center">
            
            <Menu className=" xl:hidden h-8 w-8" />
          
          </SheetTrigger>

          <SheetContent side="left">
            <SheetTitle className="flex justify-center mt-2">Menú</SheetTitle>
            <div>
              <SideBar closeSheet={() => setIsOpen(false)} /> 
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-2 ">
       
        <h1 className="text-center font-bold text-2xl">Pokedash</h1>
      
        
      </div>

      <div className="flex gap-x-4 items-center">
        
        <ChangeTheme/>
        <UserButton /> 
       

      </div>
    </nav>
  );
}
