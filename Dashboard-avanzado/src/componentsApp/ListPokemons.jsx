import { useContext } from "react";
import { Link} from "react-router-dom";
import { PokemonContext } from "../context/UseContext";
import { CustomIcon } from "../componentsApp/CustomIcons";
import { List,ArrowBigRightDash,ArrowBigLeftDash} from "lucide-react";

export function ListPokemons() {
  const { pokemons, page, nextPagePokemon,prevPagePokemon} =
    useContext(PokemonContext);
    
    return (
      <div className="bg-gray-200 rounded-lg w-auto shadow-sm bg-background p-8 dark:bg-gray-700">
        <div className="flex gap-4 items-center text-xl font-bold">
          <CustomIcon icon={List} /> Lista Pokemón
        </div>
  
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="m-4 shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition border dark:bg-gray-600 dark:border-transparent"
          >
            <div className=" text-center items-center border bg-linear-to-t from-slate-500/15 to-white rounded-2xl dark:bg-gray-800 dark:text-black">
              
              <h1 className="text-xs text-center sm:text-lg text-base text-center capitalize border-b-4 font-bold tracking-wider m-2 p-2 dark:border-b-slate-400">
                {pokemon.name}
              </h1>
  
              <div className="flex justify-center gap-3 w-full">
                <img
                  className="w-30 drop-shadow-[_0px_5px_rgba(0,0,0,0.75)]"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon.url.split("/")[6]
                  }.png`}
                  alt={pokemon.name}
                />
              </div>
  
              <div className="flex justify-center m-auto">
                {/* Botón de Ver más*/}
                <Link to={`list/${pokemon.url.split("/")[6]}`}>
                  <button className="font-semibold shadow-lg bg-purple-600/30 m-2 w-15 sm:w-32 xs:w-10 h-10 rounded-xl hover:text-purple-500 cursor-pointer hover:border hover:scale-105 dark:bg-gray-700 text-white">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
  
        <div className="items-center bg-background p-4 rounded flex justify-center gap-2 dark:bg-gray-700">
          {/* Botón de Anterior */}
          <button
            onClick={prevPagePokemon}
            disabled={page === 0}
            className={`gap-2 flex items-center text-center ${page === 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
          >
            <CustomIcon icon={ArrowBigLeftDash} />
          </button>
  
          {/* Número de página */}
          <h1 className="text-sm sm:text-base">
            (Página{page + 1})
          </h1>
  
          {/* Botón de Siguiente */}
          <button
            onClick={nextPagePokemon}
            disabled={pokemons.length === 0}
            className={`gap-2 flex items-center text-center ${pokemons.length === 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
          >
            <CustomIcon icon={ArrowBigRightDash} />
          </button>
        </div>
      </div>
    );
  }