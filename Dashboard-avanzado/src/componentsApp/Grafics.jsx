import { Building } from "lucide-react";
import { CustomIcon } from "./CustomIcons";

export function Grafics(){
    return(
        <div className="shadow-sm bg-background rounded-lg p-5">
            <div className="flex gap-x-2 items-center">
            <CustomIcon icon={Building}/>
                <p> Graficos </p>

            </div>
            <div>
                <p>Customer table</p>
            </div>

            
        </div>
    )
}