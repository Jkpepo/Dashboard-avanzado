import {
  dataSideBar,
  dataToolSideBar,
  dataSupportSideBar,
} from "../componentsApp/SideBar.data";
import { SideBarItem } from "../componentsApp/SideBarItems"; 
import {Separator} from "@/components/ui/Separator"

export function SideBar() {
  return (
    <div className=" bg-gray-100 flex flex-col justify-between h-full border dark:bg-gray-900  ">
      <div>
        <div className="p-2 md:p-6">
          <p>logo</p>
          <p className="text-slate-500 mb-2">General</p>
          {dataSideBar.map((item) => (
            <SideBarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">Tools</p>
          {dataToolSideBar.map((item) => (
            <SideBarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">Support</p>
          {dataSupportSideBar.map((item) => (
            <SideBarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <Separator />
      <footer className=" flex justify-center items-end h-[100dvh]  pb-4 ">2025, All rights reserved</footer>
    </div>
  );
}