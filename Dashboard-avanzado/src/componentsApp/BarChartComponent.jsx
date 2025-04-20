import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import {ChartColumnBig} from"lucide-react"
import { CustomIcon } from "./CustomIcons";

const PokemonTypeStats = () => {
  // Estado para almacenar el tipo de Pokémon seleccionado
  const [type, setType] = useState("electric");
  // Estado para almacenar las estadísticas promedio de los Pokémon de ese tipo
  const [stats, setStats] = useState([]);
  // Estado para definir el color del gráfico según el tipo de Pokémon
  const [color, setColor] = useState("#F1C40F");
  // Estado para contar cuántos Pokémon tienen este tipo
  const [pokemonCount, setPokemonCount] = useState(0); 

  // Colores asociados a cada tipo de Pokémon
  const typeColors = {
    fire: "#FF5733", water: "#3498DB", grass: "#2ECC71", electric: "#F1C40F",
    psychic: "#E91E63", ice: "#00BFFF", dragon: "#8E44AD", dark: "#2C3E50",
    fairy: "#FF69B4", steel: "#AAB7B8", normal: "#BDC3C7", fighting: "#D35400",
    flying: "#7FB3D5", poison: "#8E44AD", ground: "#D35400", rock: "#7F8C8D",
    bug: "#27AE60", ghost: "#6C3483"
  };

  useEffect(() => {
    // Función para obtener estadísticas promedio de los Pokémon de un tipo
    const fetchTypeStats = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();

        // Guardar la cantidad total de Pokémon de este tipo
        setPokemonCount(data.pokemon.length);

        // Obtener solo los primeros 50 Pokémon del tipo
        const pokemonList = data.pokemon.slice(0, 50).map(p => p.pokemon.name); 

        const statsSum = {}; // Objeto para acumular estadísticas
        let count = 0; // Contador de Pokémon analizados

        // Obtener la información detallada de cada Pokémon
        const pokemonPromises = pokemonList.map(pokemon => 
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json())
        );
        
        // Esperar todas las respuestas de los Pokémon
        const pokemonDataArray = await Promise.all(pokemonPromises);

        // Procesar las estadísticas de cada Pokémon
        pokemonDataArray.forEach(pokeData => {
          pokeData.stats.forEach(stat => {
            if (!statsSum[stat.stat.name]) {
              statsSum[stat.stat.name] = 0;
            }
            statsSum[stat.stat.name] += stat.base_stat;
          });
          count++;
        });

        // Calcular el promedio de estadísticas
        const avgStats = Object.keys(statsSum).map(stat => ({
          name: stat.replace("-", " "),
          value: Math.round(statsSum[stat] / count),
        }));

        setStats(avgStats);
        setColor(typeColors[type] || "#FFD700"); // Asignar color según el tipo
      } catch (error) {
        console.error("Error al obtener datos del tipo de Pokémon:", error);
        setStats([]);
      }
    };

    fetchTypeStats();
  }, [type]); // Se ejecuta cada vez que cambia el tipo seleccionado

  return (
    <motion.div 
      className="w-full px-2 sm:px-6 shadow-md bg-gray-200 text-black rounded-lg dark:bg-gray-700 dark:text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center text-xl font-semibold text-center text-black dark:text-white">
        <CustomIcon icon={ChartColumnBig} />
        Estadísticas Promedio por Tipo
      </div>
  
      <p className="text-center text-lg font-bold text-black mb-4 dark:text-white">
        Tipo: {type.toUpperCase()}
      </p>
  
      {/* Selector de tipo de Pokémon */}
      <div className="mb-4 flex justify-center">
        <motion.select
          className="w-full max-w-xs border rounded-md px-4 py-2 bg-gray-400 text-white hover:bg-gray-700 transition-all duration-300"
          onChange={(e) => setType(e.target.value)}
          value={type}
          whileHover={{ scale: 1.05 }}
        >
          {Object.keys(typeColors).map(t => (
            <option key={t} value={t}>{t.toUpperCase()}</option>
          ))}
        </motion.select>
      </div>
  
      {/* Gráfico de barras con estadísticas promedio */}
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stats} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="black" />
            <XAxis dataKey="name" stroke="gray" tick={{ fill: 'gray', fontSize: 10 }} />
            <YAxis stroke="white" tick={{ fill: 'gray', fontSize: 10 }} />
            <Tooltip wrapperStyle={{ backgroundColor: "#333", color: "gray" }} />
            <Bar dataKey="value" fill={color} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
  
      {/* Mostrar la cantidad de Pokémon del tipo seleccionado */}
      <div className="mt-4 text-center text-lg text-black dark:text-white">
        <p>Cantidad de Pokémon que pueden usar este tipo: <span className="font-bold">{pokemonCount}</span></p>
      </div>
    </motion.div>
  );
  
};

export default PokemonTypeStats;
