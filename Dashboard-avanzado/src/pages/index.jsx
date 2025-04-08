import { CardSumary } from "../componentsApp/CardSumary";

import { UsersRound, User, ChartColumn, CalendarFold } from "lucide-react";
import SpiderChart from "../componentsApp/SpiderChart";
import { ListPokemons } from "../componentsApp/ListPokemons";
import { PokemonContext } from "../context/UseContext";

export function Index() {
  return (
    <div className="bg-gray-100  dark:bg-gray-900">
      
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="bg-gray-200 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20 dark: dark:bg-gray-800 ">
        {<CardSumary icon={UsersRound} title="Prueba" total="12.45" />}
        {<CardSumary icon={User} title="Pokemones" total="130" />}
        {<CardSumary icon={ChartColumn} title="Graficos" total="190" />}
        {<CardSumary icon={CalendarFold} title="Calendario" total="" />}
        
      </div>
      <div className="mt-12 grid grid-col-1 md:grid-cols-2 w-min-300  gap-3 lg:gap-x-5 ">
        {<ListPokemons/>}
        
        {<SpiderChart />}
        
        
      </div>
    
    </div>
    
  );
}