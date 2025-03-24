 import { UserButton } from "@clerk/clerk-react"
export function Inicio (){
    return(
        <div>
<UserButton/>
<h2 className="text-2xl mb-4">Dashboard</h2>
<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
<div>Card Suamry</div>
<div>Card Suamry</div>
<div>Card Suamry</div>


</div>
    
        </div>
    )

}