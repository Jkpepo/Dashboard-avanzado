import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/UseContext";

export function PokemonDetails() {
    // me traigo el id con useParams ya que la api de pokemon tiene diferente edpoints y para poder acceder
    // a los detalles del pokemon debo ir id por id 
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
//   creo un estado para almacenar la respuesta de la peticion a la url

  const url_base = `https://pokeapi.co/api/v2/pokemon/${id}`;

  
  const { nextPagePokemon, prevPagePokemon, page } = useContext(PokemonContext);

  useEffect(() => {
    fetch(url_base)
      .then((result) => result.json())
      .then((data) => {
        setPokemonDetails(data);
      });
  }, [id]);

//  esto me da tiempo 
// a que me carguen los datos ya que las peticiones son asincronas y muchas veces no cargan a tiempo 
// y me renderizaria datos  vacios y eso no queremos que pase
//   
//
  if (!pokemonDetails) {
    return <div className="text-center py-4 dark:bg-gray-700 text-white">Cargando Pokémon...</div>;
  }

  return (
    <div className="  p-14 rounded-3xl bg-slate-400/80  p-5 m-4 shadow-xl mt-6 font-semibold dark:bg-gray">
      <div className="flex gap-4 mb-4">
        <h1 className=" w-15 h-15 bg-cyan-400 border-5 rounded-full"></h1>
        <h1 className=" w-5 h-5  bg-red-500 border-2 border-black rounded-full"></h1>
        <h1 className=" w-5 h-5  bg-yellow-200 border-2 border-black rounded-full"></h1>
        <h1 className=" w-5 h-5  bg-green-500 border-2 border-black rounded-full"></h1>
      </div>
      <div className=" bg-gray-700 border-[20px] rounded-3xl">
        <div className="flex  p-2  h-10 ">
          <h1 className="  flex  justify-center items-center mt-2 w-15 h-15 text-white text-xl font-bold border bg-gray-500 rounded-full">
            {pokemonDetails.id}
          </h1>
        </div>

        <h1 className="text-white  tracking-widest text-3xl font-bold capitalize text-center  p-4 ">
          {pokemonDetails.name}
        </h1>

        <img
          src={
            pokemonDetails.sprites.versions["generation-v"]["black-white"]
              .animated.front_default ??
            pokemonDetails.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={pokemonDetails.name}
          className="mx-auto w-80 h-80 "
        />
        <div className="border mt-2 bg-gray-300">
          <h2 className="text-center text-2xl font-bold"> Caracteristicas:</h2>
          <h4 className="text-xl p-2">
            Peso: {(pokemonDetails.weight / 10).toFixed(1)} kg
          </h4>
          <h4 className="text-xl p-2 ">
            Altura: {pokemonDetails.height / 10} m
          </h4>
          <h1 className="text-center text-2xl font-bold m-4 ">Tipo:</h1>
          <div className="flex justify-around m-2">
            {pokemonDetails?.types?.map((type, id) => {
              return (
                <div className="" key={id}>
                  <h1 className="capitalize text-xl font-bold">
                    {" "}
                    {type.type.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" items-center w-full rounded-xl bg-slate-400 text-md font-bold">
        {pokemonDetails?.stats?.map((sta, id) => {
          return (
            <div className=" m-4" key={id}>
              <div className=" flex items-center  gap-2 ">
                <h1 className="flex-grow capitalize font-medium ">
                  {" "}
                  {sta?.stat?.name}
                </h1>
                <progress
                  className="w-50"
                  value={sta.base_stat}
                  max={150}
                ></progress>
                <p className="font-bold text-center w-16"> {sta.base_stat}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevPagePokemon}
        className={`gap-4 flex items-center text-center ${
          page === 0 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        Anterior
      </button>
      <button
        onClick={nextPagePokemon}
        disabled={page === 130}
        className={` gap-4 flex items-center text-center ${
          page === 130 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        Siguiente
      </button>
    </div>
  );
}
