import React, { useEffect, useState } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { CustomIcon } from "../componentsApp/CustomIcons";
import { ChartNoAxesCombined } from "lucide-react";

const SpiderChart = () => {
  const [pokemon, setPokemon] = useState("pikachu"); // Pokémon por defecto
  const [stats, setStats] = useState([]); // Estadísticas para el radar chart
  const [image, setImage] = useState(""); // Imagen del Pokémon
  const [color, setColor] = useState("#FFD700"); // Color por tipo
  const [evolutions, setEvolutions] = useState([]); // Cadena de evolución
  const [showEvolution, setShowEvolution] = useState(false); // Mostrar/ocultar evolución
  const [nextEvolution, setNextEvolution] = useState(null); // Próxima evolución
  const [inputValue, setInputValue] = useState(""); // Valor del input
  const [error, setError] = useState(null); // Estado para errores

  // Colores por tipo
  const typeColors = {
    fire: "#FF5733",
    water: "#3498DB",
    grass: "#2ECC71",
    electric: "#F1C40F",
    psychic: "#E91E63",
    ice: "#00BFFF",
    dragon: "#8E44AD",
    dark: "#2C3E50",
    fairy: "#FF69B4",
    steel: "#AAB7B8",
    normal: "#BDC3C7",
    fighting: "#D35400",
    flying: "#7FB3D5",
    poison: "#8E44AD",
    ground: "#D35400",
    rock: "#7F8C8D",
    bug: "#27AE60",
    ghost: "#6C3483",
  };

  // Función para obtener datos de un Pokémon específico
  const fetchPokemonData = async (pokeName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);

      // Si la respuesta no es exitosa, lanzamos un error
      if (!response.ok) throw new Error("Pokémon no encontrado");

      const data = await response.json();

      // Formateamos las stats para el RadarChart
      const formattedStats = data.stats.map((stat) => ({
        stat: stat.stat.name.replace("-", " "),
        value: stat.base_stat,
      }));

      setStats(formattedStats);
      setImage(data.sprites.other["official-artwork"].front_default);

      const pokemonType = data.types[0].type.name;
      setColor(typeColors[pokemonType] || "#FFD700");

    
      // --- Cadena de evolución
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData = await evolutionResponse.json();

      const evoChain = [];
      let evoStage = evolutionData.chain;
      while (evoStage) {
        evoChain.push(evoStage.species.name);
        evoStage = evoStage.evolves_to[0];
      }

      setEvolutions(evoChain.length > 1 ? evoChain : []);
      setNextEvolution(
        evoChain.includes(pokeName) && evoChain[evoChain.indexOf(pokeName) + 1]
          ? evoChain[evoChain.indexOf(pokeName) + 1]
          : null
      );

      setError(null); // Si todo sale bien, limpiamos error
    } catch (error) {
      console.error("Error al obtener datos del Pokémon:", error);
      setStats([]);
      setImage("");
      setEvolutions([]);
      setNextEvolution(null);
      setError(error.message); // Guardamos el mensaje del error
    }
  };

  // Ejecutar al cargar o cambiar el nombre del Pokémon
  useEffect(() => {
    fetchPokemonData(pokemon);
  }, [pokemon]);

  // Manejador del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Detectamos ENTER para buscar el Pokémon
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPokemon(inputValue);
    }
  };

  return (
    <div className="w-full overflow-x-hidden px-2 sm:px-5">
      <div className="shadow-sm bg-gray-200 rounded-lg p-5 dark:bg-gray-700">
        <div className="flex gap-4 items-center text-xl font-semibold mb-8">
          <CustomIcon icon={ChartNoAxesCombined} />
          Estadísticas Pokémon
        </div>
  
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            className="w-full max-w-xs border rounded-md px-4 py-2 bg-gray-300 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
  
        {/* Mensaje de error */}
        {error && (
          <div className="text-red-500 text-center font-medium mb-4">
            {error}
          </div>
        )}
  
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          {image && (
            <motion.img
              src={image}
              alt={pokemon}
              className="w-32 h-32 object-contain bg-white rounded-full shadow-lg p-2 dark:bg-gray-600"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.5, repeat: 1 }}
            />
          )}
  
          <div className="w-full sm:w-3/4">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart outerRadius="70%" data={stats}>
                <PolarGrid stroke="gray" />
                <PolarAngleAxis dataKey="stat" tick={{ fill: "gray", fontSize: 12 }} />
                <PolarRadiusAxis tick={{ fill: "black", fontSize: 10 }} />
                <Radar
                  name={pokemon.toUpperCase()}
                  dataKey="value"
                  stroke={color}
                  fill={color}
                  fillOpacity={0.7}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        {/* Botón para mostrar evolución */}
        {evolutions.length > 1 && (
          <button
            onClick={() => setShowEvolution(!showEvolution)}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 m-4"
          >
            {showEvolution ? "Ocultar Evolución" : "Mostrar Evolución"}
          </button>
        )}
  
        {/* Cadena de evolución */}
        {showEvolution && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold">Evoluciones</h3>
            <p>{evolutions.join(" → ")}</p>
          </div>
        )}
  
        {/* Botón para ir a la siguiente evolución */}
        {nextEvolution && (
          <button
            onClick={() => setPokemon(nextEvolution)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
          >
            Mostrar siguiente evolución
          </button>
        )}
      </div>
    </div>
  );
}  
export default SpiderChart;
