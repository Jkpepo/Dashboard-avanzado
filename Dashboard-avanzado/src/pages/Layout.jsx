import { Navbar } from "./Navbar/Navbar";
import { SideBar } from "./SideBar";

export function Layout({ children }) {
  return (
    <div className="flex w-full h-full">
      <div className="sm:hidden xl:block w-80 h-full xl:fixed lg:block">
        <SideBar />
      </div>

      <div className="w-full xl:ml-80">
        <Navbar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
          {children}
        </div>
      </div>
    </div>
  );
}
