import { useContext } from "react";
import { Link} from "react-router-dom";
import { PokemonContext } from "../context/UseContext";
import { CustomIcon } from "../componentsApp/CustomIcons";
import { List,ArrowBigRightDash,ArrowBigLeftDash} from "lucide-react";

export function ListPokemons() {
  const { pokemons, page, nextPagePokemon,prevPagePokemon} =
    useContext(PokemonContext);
   
  return (
    <div className="  bg-gray-200 rounded-lg w-auto shadow-sm bg-background rounded-lg p-8 dark:bg-gray-700 ">
      <div className="flex gap-4 items-center text-xl font-bold ">

      <CustomIcon icon={List}  /> Lista Pokemón
      </div>
      {pokemons.map((pokemon) => (
        <div 
        key={pokemon.name}
        className=" m-4  shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition border dark:bg-gray-600 dark:border-transparent"
        >
          <div className=" p-5 m-2  items-center borde bg-linear-to-t from-slate-500/15 to-white rounded-2xl dark:bg-gray-800 dark:text-black">
          <h1 className="text-xl text-center capitalize border-b-4 font-bold tracking-wider m-2 p-2 dark:border-b-slate-400 " >{pokemon.name}</h1>
            <div className=" flex justify-center gap-3    w-full ">
              <img className="w-30 drop-shadow-[_0px_5px_rgba(0,0,0,0.75)]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />
            </div>
            <div className="flex gap-4  ">
              <Link to={`calendar/${pokemon.url.split("/")[6]}`}>
              
              <button className=" font-semibold shadow-lg bg-purple-600/30  m-2 w-40 h-10 rounded-xl hover:text-purple-500 cursor-pointer hover:border hover:scale-105 dark:bg-gray-700 text-white">Ver más</button>
              
              </Link>
           
            </div>
          </div>
        </div>
      ))}

      <div className=" items-center  bg-background  p-4  rounded flex justify-center gap-4 dark:bg-gray-700">


    <button
        onClick={prevPagePokemon}
        disabled ={page === 0}
        className={`gap-4 flex items-center text-center ${page === 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
        
        ><CustomIcon icon={ArrowBigLeftDash}/>Anterior
    </button>
        <h1>  (Pagina {page + 1})</h1>
      <button
        onClick={nextPagePokemon}
        disabled={page === 130}
        className={` gap-4 flex items-center text-center ${page ===130  ? "text-gray-400 cursor-not-allowed" : ""}`}
      >Siguiente <CustomIcon icon={ArrowBigRightDash}/>
    </button>
      </div>
    </div>
  );
}
