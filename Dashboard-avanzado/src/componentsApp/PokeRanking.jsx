import React, { useEffect, useState } from "react"; // Importamos React y los hooks necesarios
import { motion } from "framer-motion"; // Importamos framer-motion para animaciones
import { Spiner } from "./Spiner";

const PokemonRanking = () => {
  // Estado que almacenará la lista de Pokémon obtenidos
  const [pokemonList, setPokemonList] = useState([]);
  // Estado que controlará la cantidad de Pokémon visibles en la lista
  const [visibleCount, setVisibleCount] = useState(20);

  // useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener la lista de Pokémon
    const fetchAllPokemon = async () => {
      try {
        // Fetching los primeros 500 Pokémon de la API
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
        const data = await response.json();
        
        // Obtenemos detalles de cada Pokémon y calculamos las estadísticas totales
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            // Calculamos la suma total de las estadísticas
            const totalStats = details.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other["official-artwork"].front_default,
              totalStats,
            };
          })
        );

        // Ordenamos los Pokémon por sus estadísticas totales (de mayor a menor)
        const sortedPokemon = pokemonDetails.sort((a, b) => b.totalStats - a.totalStats);
        // Establecemos la lista de Pokémon en el estado
        setPokemonList(sortedPokemon);
      } catch (error) {
        console.error("Error al obtener los Pokémon:", error); // Manejo de errores
      }
    };

    fetchAllPokemon(); // Llamamos a la función para obtener los datos
  }, []); // Este efecto se ejecuta solo una vez, al montar el componente

  // Función para cargar más Pokémon cuando el usuario hace clic en "Cargar Más"
  const loadMore = () => {
    setVisibleCount((prev) => prev + 20); // Incrementa el contador de Pokémon visibles en 20
  };
  if (pokemonList.length === 0) {
   return <div className=' flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  '> <Spiner/></div>;
  }
  return (
    <div className="p-6 bg-background text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-black mb-6 dark:text-white">Ranking de Pokémon</h2>
      <div className="flex flex-col items-center space-y-4">
        {/* Renderizamos la lista de Pokémon visibles hasta el contador visibleCount */}
        {pokemonList.slice(0, visibleCount).map((pokemon, index) => (
          <motion.div 
            key={pokemon.id} 
            className="flex items-center bg-gray-200 text-black p-4 rounded-lg w-full max-w-md shadow-md dark:bg-gray-700 dark:text-white"
            initial={{ opacity: 0, x: -20 }} // Animación inicial (opacidad 0, desplazado hacia la izquierda)
            animate={{ opacity: 1, x: 0 }} // Animación final (opacidad 1, desplazado a su posición original)
            transition={{ duration: 0.5 }} // Duración de la animación
          >
            {/* Ranking de Pokémon */}
            <span className="text-2xl font-bold text-yellow-500 mr-4">#{index + 1}</span>
            {/* Imagen del Pokémon */}
            <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16 mr-4" />
            <div>
              <p className="text-lg font-semibold capitalize">{pokemon.name}</p>
              {/* Muestra las estadísticas totales del Pokémon */}
              <p className="text-sm text-gray-400">Total Stats: {pokemon.totalStats}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Si aún hay más Pokémon, mostramos el botón para cargar más */}
      {visibleCount < pokemonList.length && (
        <button 
  className="mt-6 px-6 py-3 bg-gray-300 text-gray-900 font-bold rounded-xl shadow-md hover:bg-gray-600  hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gray-700 dark:text-white dark:hover:text-black" 
   onClick={loadMore}
        >
          Cargar Más
        </button>
      )}
    </div>
  );
};

export default PokemonRanking;
