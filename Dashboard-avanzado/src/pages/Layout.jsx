import { Navbar } from "./Navbar/Navbar";


export function Layout({children}){
    return(
        <div className="flex w-full h-full">
            <div className=" hidden xl:block w-80 h-full xl:fixed ">
              asdasdasdasaaaaaaaaaaaa

            </div>
        
        <div className="w-full xl:ml-80">
            <Navbar/>
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
            {children}
        </div>
        </div>
        </div>
    )
}