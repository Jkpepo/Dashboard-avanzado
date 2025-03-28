import { useContext } from "react";
import { PokemonContext } from "../context/UseContext";
import { CustomIcon } from "../componentsApp/CustomIcons";
import { List,ArrowBigRightDash,ArrowBigLeftDash} from "lucide-react";

export function ListPokemons() {
  const { pokemons, page, setPage, pokemonsPerPage,nextPagePokemon,prevPagePokemon} =
    useContext(PokemonContext);
  return (
    <div className=" bg-background rounded-lg w-auto shadow-sm bg-background rounded-lg p-5  ">
      <CustomIcon icon={List} />

      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className=" m-2   shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition "
        >
          <div className=" p-5 m-2  items-center">
            <div className="hover:img-scale-2 flex gap-3 items-center">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png`}
                alt={pokemon.name}
              />

              {pokemon.name}
            </div>
            <div className="flex gap-4 ">
              <p className=" "> otro dato</p>
            </div>
          </div>
        </div>
      ))}

      <div className=" items-center  bg-background border  rounded flex justify-center gap-4">


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
