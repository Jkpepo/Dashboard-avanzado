import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function SideBarItem({ item }) {
  const { href, icon: Icon, label } = item;
  const location = useLocation();
  const pathname = location.pathname;
  const activePaht = pathname === href;
  return (
    <div>
      <Link
        to={href}
        className={cn(
          `flex gap-x-2 mr-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`,
          activePaht && "bg-slate-400/20"
        )}
      >
        <Icon className="h-5 w-5" />
        {label}
      </Link>
    </div>
  );
}
