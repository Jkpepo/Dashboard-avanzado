import { useContext } from "react";
import { CardSumary } from "../componentsApp/CardSumary";
import { PokemonContext } from "../context/UseContext";
import {  Blocks, CalendarFold,PawPrint ,Flame} from "lucide-react";
import SpiderChart from "../componentsApp/SpiderChart";
import { ListPokemons } from "../componentsApp/ListPokemons";
import BarCahartComponent from "../componentsApp/BarChartComponent";
import { Spiner } from "../componentsApp/Spiner";
// este componente viene a ser mi "Main" la pagina principal
// donde estoy mostrando las cards,la lista de pokemones y algunos graficos

export function Index() {
  // me traigo el context de cada dato para usarlo aqui en estas cards
  const { totalPokemons, totalTypes, totalGenerations } =
    useContext(PokemonContext);
  return (
    <div className="bg-gray-100  dark:bg-gray-900">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="bg-gray-200 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20  dark:bg-gray-800 ">
        {
          <CardSumary
            icon={PawPrint}
            title="Total Pokémones"
            total={totalPokemons ? totalPokemons : <Spiner />}
          />
        }
        {
          <CardSumary
            icon={Flame}
            title="Tipos de Pokémones"
            total={totalTypes ? totalTypes : <Spiner />}
          />
        }
        {
          <CardSumary
            icon={Blocks}
            title="Generaciones"
            total={totalGenerations ? totalGenerations : <Spiner />}
          />
        }
        {
          <CardSumary
            icon={CalendarFold}
            title="Fecha actual"
            total={new Date().toLocaleDateString()}
          />
        }
      </div>
      <div className="mt-12 flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <ListPokemons />
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[500px]">
          <div className=" bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
            <SpiderChart />
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-xl shadow">
            <BarCahartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
