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

const SpiderChart = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#FFD700");
  const [evolutions, setEvolutions] = useState([]);
  const [showEvolution, setShowEvolution] = useState(false);
  const [sound, setSound] = useState(null);
  const [nextEvolution, setNextEvolution] = useState(null);
  const [inputValue, setInputValue] = useState("");

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

  const fetchPokemonData = async (pokeName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
      const data = await response.json();
      
      const formattedStats = data.stats.map((stat) => ({
        stat: stat.stat.name.replace("-", " "),
        value: stat.base_stat,
      }));

      setStats(formattedStats);
      setImage(data.sprites.other["official-artwork"].front_default);

      const pokemonType = data.types[0].type.name;
      setColor(typeColors[pokemonType] || "#FFD700");

      setSound(data.cries?.latest || null);
      
      if (data.cries?.latest) {
        new Audio(data.cries.latest).play();
      }

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
      setNextEvolution(evoChain.includes(pokeName) && evoChain[evoChain.indexOf(pokeName) + 1] ? evoChain[evoChain.indexOf(pokeName) + 1] : null);
    } catch (error) {
      console.error("Error al obtener datos del Pokémon:", error);
      setStats([]);
      setImage("");
      setEvolutions([]);
      setNextEvolution(null);
    }
  };

  useEffect(() => {
    fetchPokemonData(pokemon);
  }, [pokemon]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPokemon(inputValue);
    }
  };

  return (
    <div className="p-6 shadow-lg bg-gray-900 text-white rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Estadísticas de Pokémon</h2>
      
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          className="border rounded-md px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="flex items-center justify-between">
        {image && (
          <motion.img
            src={image}
            alt={pokemon}
            className="w-32 h-32 object-contain bg-white rounded-full shadow-lg p-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.5, repeat: 1 }}
          />
        )}

        <div className="w-3/4">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius="70%" data={stats}>
              <PolarGrid stroke="white" />
              <PolarAngleAxis dataKey="stat" tick={{ fill: "white", fontSize: 12 }} />
              <PolarRadiusAxis tick={{ fill: "white", fontSize: 10 }} />
              <Radar name={pokemon.toUpperCase()} dataKey="value" stroke={color} fill={color} fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {evolutions.length > 1 && (
        <button
          onClick={() => setShowEvolution(!showEvolution)}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
        >
          {showEvolution ? "Ocultar Evolución" : "Mostrar Evolución"}
        </button>
      )}

      {showEvolution && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold">Evoluciones</h3>
          <p>{evolutions.join(" → ")}</p>
        </div>
      )}

      {nextEvolution && (
        <button
          onClick={() => setPokemon(nextEvolution)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
        >
          Mostrar siguiente evolución
        </button>
      )}
    </div>
  );
};

export default SpiderChart;
