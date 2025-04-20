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
    <div className="w-full max-w-lg mx-auto px-2 py-4 sm:p-5 rounded-3xl bg-slate-400/80 shadow-xl mt-6 font-semibold dark:bg-gray-700">

  
    {/* Info principal */}
    <div className="bg-gray-700 border-[10px] sm:border-[20px] rounded-3xl">
      <div className="flex justify-center py-2">
        <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 text-white text-base sm:text-xl font-bold border bg-gray-500 rounded-full">
          {pokemonDetails.id}
        </div>
      </div>
  
      {/* Nombre */}
      <h1 className="text-white tracking-widest text-2xl sm:text-3xl font-bold capitalize text-center py-2">
        {pokemonDetails.name}
      </h1>
  
      {/* Imagen del pokemon la animada o sino la normal  */}
      <img
        src={
          pokemonDetails.sprites.versions["generation-v"]["black-white"]
            .animated.front_default ??
          pokemonDetails.sprites.other["official-artwork"].front_default
            
        }
        alt={pokemonDetails.name}
        className="mx-auto  max-w-[100px] sm:max-w-[320px] h-[150px]"
      />
  
      {/* Características */}
      <div className="text-black border mt-3 bg-gray-300 rounded-lg ">
        <h2 className="text-center text-xl font-bold ">Características:</h2>
        <p className="text-base sm:text-lg">Peso: {(pokemonDetails.weight / 10).toFixed(1)} kg</p>
        <p className="text-base sm:text-lg">Altura: {(pokemonDetails.height / 10).toFixed(1)} m</p>
        <h2 className="text-center text-xl font-bold mt-2">Tipo:</h2>
        <div className="flex justify-around flex-wrap mt-1">
          {pokemonDetails?.types?.map((type, id) => (
            <p key={id} className="capitalize text-base sm:text-lg font-semibold">
              {type.type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  
    {/* Stats */}
    <div className="text-black mt-2 w-full rounded-xl bg-slate-300 text-sm font-semibold p-3">
      {pokemonDetails?.stats?.map((sta, id) => (
        <div className="mb-3" key={id}>
          <div className="flex items-center gap-2">
            <span className="w-24 sm:w-32 capitalize">{sta?.stat?.name}</span>
            <progress className="flex-1 h-3" value={sta.base_stat} max={150}></progress>
            <span className="w-10 text-right">{sta.base_stat}</span>
          </div>
        </div>
      ))}
    </div>
  
    {/* Botones */}
    <div className="flex justify-between mt-4 px-2">
      <button
        onClick={() => navigate(`/list/${parseInt(id) - 1}`)}
        disabled={parseInt(id) === 1}
        className={`bg-gray-700 w-24 h-9 text-xs sm:text-sm rounded-lg text-white flex justify-center items-center transition hover:bg-gray-500 hover:text-black hover:scale-105 dark:bg-slate-900 ${
          parseInt(id) === 1 ? "opacity-0" : ""
        }`}
      >
        Anterior
      </button>
  
      <button
        onClick={() => navigate(`/list/${parseInt(id) + 1}`)}
        disabled={parseInt(id) === 1025}
        className={`bg-gray-700 w-24 h-9 text-xs sm:text-sm rounded-lg text-white flex justify-center items-center transition hover:bg-gray-500 hover:text-black hover:scale-105 dark:bg-slate-900 ${
          parseInt(id) === 1025 ? "opacity-0" : ""
        }`}
      >
        Siguiente
      </button>
    </div>
  </div>
  

  )}  