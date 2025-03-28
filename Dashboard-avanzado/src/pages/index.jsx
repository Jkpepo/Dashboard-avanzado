import { CardSumary } from "../componentsApp/CardSumary";

import { UsersRound, User, ChartColumn, CalendarFold } from "lucide-react";
import { Grafics } from "./Grafics";
import { ListPokemons } from "../componentsApp/ListPokemons";

export function Index() {
  return (
    <div>
      
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {<CardSumary icon={UsersRound} title="Prueba" total="12.45" />}
        {<CardSumary icon={User} title="Pokemones" total="130" />}
        {<CardSumary icon={ChartColumn} title="Graficos" total="190" />}
        {<CardSumary icon={CalendarFold} title="Calendario" total="" />}
        
      </div>
      <div className="mt-12 grid grid-col-1 md:grid-cols-2 w-min-300  gap-3 lg:gap-x-5">
        {<ListPokemons/>}
        {<Grafics />}
        
        
      </div>
    
    </div>
    
  );
}