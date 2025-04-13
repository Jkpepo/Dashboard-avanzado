import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spiner } from "./Spiner";

export function PokemonDetails() {
  // me traigo el id con useParams ya que la api de pokemon tiene diferente edpoints y para poder acceder
  // a los detalles del pokemon debo ir id por id
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  //   creo un estado para almacenar la respuesta de la peticion a la url (datos)

  const url_base = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const navigate = useNavigate();
  // agregue el navigate y elimine el context ya que con el useparams recibo el id que es lo que necesito
  // para cambiar de uno a otro Ventajas de usar URLs dinámicas con useParams y useNavigate:
  // Simplificación: Ya no necesitas un estado global ni funciones de navegación.
  // Solo necesitas cambiar la URL al siguiente o anterior Pokémon.

  useEffect(() => {
    fetch(url_base)
      .then((result) => result.json())
      .then((data) => {
        setPokemonDetails(data);
        setLoading(false);
      });
  }, [id]);

  //  esto me da tiempo
  // a que me carguen los datos ya que las peticiones son asincronas y muchas veces no cargan a tiempo
  // y me renderizaria datos  vacios y eso no queremos que pase y mejor que muestre cargando
  //
  //
  if (loading) {
    return <Spiner />; 
  }

  return (
    <div className="   p-14 rounded-3xl bg-slate-400/80  p-5 m-4 shadow-xl mt-6 font-semibold dark:bg-gray">
      <div className="flex gap-4 mb-4">
        <h1 className=" w-15 h-15 bg-cyan-400 border-5 rounded-full dark:border-5 border-white "></h1>
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
        {/* nombre del pokemon */}
        <h1 className="text-white  tracking-widest text-3xl font-bold capitalize text-center  p-4 ">
          {pokemonDetails.name}
        </h1>
        {/* imagen del pokemon la animada o sino la normal tipo pixel */}
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
        <div className=" text-black border mt-2 bg-gray-300">
          <h2 className=" text-center text-2xl font-bold"> Caracteristicas:</h2>
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
      <div className=" text-black items-center w-full rounded-xl bg-slate-400 text-md font-bold">
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
      <div className="flex justify-around text-center items-center">
        <button
          onClick={() => navigate(`/list/${parseInt(id) - 1}`)} // Navegar al Pokémon anterior
          disabled={parseInt(id) === 1} // Deshabilitar si estamos en el primer Pokémon
          className={` bg-gray-700 w-20 gap-4 flex justify-center  items-center rounded-lg h-8 text-white transition duration-200 ease-in-out hover:bg-gray-500 hover:text-black hover:scale-105 ${
            parseInt(id) === 1 ? "opacity-0 " : ""
          }`}
        >
          Anterior
        </button>

        <button
          onClick={() => navigate(`/list/${parseInt(id) + 1}`)} // Navegar al siguiente Pokémon
          disabled={parseInt(id) === 1025} // Deshabilitar si estamos en el último Pokémon
          className={` bg-gray-700 w-20 gap-4 flex justify-center  items-center rounded-lg h-8 text-white transition duration-200 ease-in-out hover:bg-gray-500 hover:text-black hover:scale-105 ${
            parseInt(id) === 1025 ? "opacity-0 " : ""
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
