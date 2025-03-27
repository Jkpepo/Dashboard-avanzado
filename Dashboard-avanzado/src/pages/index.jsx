import { CardSumary } from "../componentsApp/CardSumary";

import { UsersRound, User, ChartColumn, CalendarFold } from "lucide-react";
import { Grafics } from "./Grafics";

export function Inicio() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {<CardSumary icon={UsersRound} title="Prueba" total="12.45" />}
        {<CardSumary icon={User} title="Pokemones" total="130" />}
        {<CardSumary icon={ChartColumn} title="Graficos" total="190" />}
        {<CardSumary icon={CalendarFold} title="Calendario" total="" />}
        
      </div>
      <div className="grid grid-cols-1 mt-12  xl:grid-cols-2 md:gap-x-10  ">
  <Grafics/>
    <p>GraficosxD</p>
      </div>
    
    </div>
  );
}
