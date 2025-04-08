import { Navbar } from "./Navbar/Navbar";
import { SideBar } from "./SideBar";

export function Layout({ children }) {
  return (
    <div className="bg-gray-100  flex w-full h-full  dark:bg-gray-900  ">
      <div className=" sidebar-container    ">
        <div className=" sidebar  "> 

        <SideBar />
        </div>
      </div>

      <div className="w-full xl:ml-80">
        <Navbar />
        <div className=" bg-gray-100  p-6   dark:bg-gray-900 ">
          {children}
        </div>
      </div>
    </div>
  );
}
