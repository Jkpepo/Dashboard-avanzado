import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const PokemonTypeStats = () => {
  const [type, setType] = useState("electric");
  const [stats, setStats] = useState([]);
  const [color, setColor] = useState("#F1C40F");
  const [pokemonCount, setPokemonCount] = useState(0); 

  const typeColors = {
    fire: "#FF5733", water: "#3498DB", grass: "#2ECC71", electric: "#F1C40F",
    psychic: "#E91E63", ice: "#00BFFF", dragon: "#8E44AD", dark: "#2C3E50",
    fairy: "#FF69B4", steel: "#AAB7B8", normal: "#BDC3C7", fighting: "#D35400",
    flying: "#7FB3D5", poison: "#8E44AD", ground: "#D35400", rock: "#7F8C8D",
    bug: "#27AE60", ghost: "#6C3483"
  };

  useEffect(() => {
    const fetchTypeStats = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();

        
        setPokemonCount(data.pokemon.length);

        const pokemonList = data.pokemon.slice(0, 50).map(p => p.pokemon.name); 

        const statsSum = {};
        let count = 0;

        const pokemonPromises = pokemonList.map(pokemon => 
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json())
        );
        
        const pokemonDataArray = await Promise.all(pokemonPromises);

        pokemonDataArray.forEach(pokeData => {
          pokeData.stats.forEach(stat => {
            if (!statsSum[stat.stat.name]) {
              statsSum[stat.stat.name] = 0;
            }
            statsSum[stat.stat.name] += stat.base_stat;
          });
          count++;
        });

        const avgStats = Object.keys(statsSum).map(stat => ({
          name: stat.replace("-", " "),
          value: Math.round(statsSum[stat] / count),
        }));

        setStats(avgStats);
        setColor(typeColors[type] || "#FFD700");
      } catch (error) {
        console.error("Error al obtener datos del tipo de Pokémon:", error);
        setStats([]);
      }
    };

    fetchTypeStats();
  }, [type]);

  return (
    <motion.div 
      className="p-6 shadow-lg bg-gray-900 text-white rounded-lg max-w-3xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-400">
        Estadísticas Promedio por Tipo
      </h2>
      <p className="text-center text-lg font-bold text-yellow-300">Tipo: {type.toUpperCase()}</p>

      <div className="mb-4 flex justify-center">
        <motion.select
          className="border rounded-md px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
          onChange={(e) => setType(e.target.value)}
          value={type}
          whileHover={{ scale: 1.05 }}
        >
          {Object.keys(typeColors).map(t => (
            <option key={t} value={t}>{t.toUpperCase()}</option>
          ))}
        </motion.select>
      </div>

      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stats} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="white" />
            <XAxis dataKey="name" stroke="white" tick={{ fill: 'white' }} />
            <YAxis stroke="white" tick={{ fill: 'white' }} />
            <Tooltip wrapperStyle={{ backgroundColor: "#333", color: "white" }} />
            <Bar dataKey="value" fill={color} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="mt-4 text-center text-lg text-yellow-300">
        <p>Cantidad de Pokémon que pueden usar este tipo: <span className="font-bold">{pokemonCount}</span></p>
      </div>
    </motion.div>
  );
};

export default PokemonTypeStats;
