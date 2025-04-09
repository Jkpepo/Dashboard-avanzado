import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function SideBarItem({ item, closeSheet }) {
  const { href, icon: Icon, label } = item;

  const handleClick = () => {
    closeSheet(); 
  };

  /// items de la side bar para cuando ponga el cursor encima se ponga de color gris 
  return (
    <div className="dark:bg-gray-900">
      <Link
        to={href}
        onClick={handleClick} 
        className={cn(
          "flex gap-x-2 mr-2 light:text-slate-700 dark:bg-gray text-sm items-center hover:bg-slate-500/20 p-2 rounded-lg cursor-pointer"
        )}
      >
        {/* /// manejo el tamaño de los iconos de la side bar */}
        <Icon className="h-6 w-6" />
        {label}
      </Link>
    </div>
  );
}
