import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function SideBarItem({ item, closeSheet }) {
  const { href, icon: Icon, label } = item;

  const handleClick = () => {
    closeSheet(); 
  };

  return (
    <div>
      <Link
        to={href}
        onClick={handleClick} 
        className={cn(
          "flex gap-x-2 mr-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer"
        )}
      >
        <Icon className="h-5 w-5" />
        {label}
      </Link>
    </div>
  );
}
