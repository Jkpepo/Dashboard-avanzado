import { SideBar } from "./SideBar";

export function SideBarFull(){

    return(
        <div className="h-screen">
            <div className="h-full flex flex-col border-r">
                <p>Logo</p>
                <SideBar/>

            </div>
        </div>
    )
}