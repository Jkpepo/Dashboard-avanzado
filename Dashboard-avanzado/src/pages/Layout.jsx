import { Navbar } from "./Navbar/Navbar";
import { SideBar } from "./SideBar";

export function Layout({ children }) {
  return (
    <div className=" flex w-full h-full  dark:bg-gray-900  ">
      <div className=" sidebar-container    ">
        <div className=" sidebar  "> 

        <SideBar />
        </div>
      </div>

      <div className="w-full xl:ml-80">
        <Navbar />
        <div className="p-6 bg-[#fafbfc]  dark:bg-gray-900 ">
          {children}
        </div>
      </div>
    </div>
  );
}
