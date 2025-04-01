import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const PokemonComparator = () => {
  const [pokemon1, setPokemon1] = useState("arceus");
  const [pokemon2, setPokemon2] = useState("rayquaza");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [cry1, setCry1] = useState(null);
  const [cry2, setCry2] = useState(null);
  const [stats1, setStats1] = useState([]);
  const [stats2, setStats2] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winnerCry, setWinnerCry] = useState(null);

  const fetchPokemonData = async (pokemon, setStats, setImage, setCry) => {
    try {
      if (!pokemon) return;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      if (!response.ok) throw new Error("Pokémon no encontrado");
      const data = await response.json();
      const formattedStats = data.stats.map(stat => ({
        name: stat.stat.name.replace("-", " "),
        value: stat.base_stat,
      }));
      setStats(formattedStats);
      setImage(data.sprites.other["official-artwork"].front_default);
      setCry(data.cries?.latest || null);
    } catch (error) {
      console.error("Error al obtener datos del Pokémon:", error);
      setStats([]);
      setImage(null);
      setCry(null);
    }
  };

  const comparePokemon = () => {
    if (!stats1.length || !stats2.length) return;
    const totalStats1 = stats1.reduce((sum, stat) => sum + stat.value, 0);
    const totalStats2 = stats2.reduce((sum, stat) => sum + stat.value, 0);
    if (totalStats1 > totalStats2) {
      setWinner(pokemon1);
      setWinnerCry(cry1);
    } else if (totalStats1 < totalStats2) {
      setWinner(pokemon2);
      setWinnerCry(cry2);
    } else {
      setWinner("Empate");
      setWinnerCry(null);
    }
  };

  useEffect(() => {
    if (pokemon1) fetchPokemonData(pokemon1, setStats1, setImage1, setCry1);
    if (pokemon2) fetchPokemonData(pokemon2, setStats2, setImage2, setCry2);
  }, [pokemon1, pokemon2]);

  return (
    <div className="p-6 shadow-lg bg-gray-900 text-white rounded-lg max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Comparador de Pokémon</h2>
      <div className="flex justify-around mb-4">
        <input
          type="text"
          placeholder="Pokémon 1"
          className="border rounded-md px-4 py-2 bg-gray-800 text-white placeholder-gray-400"
          value={pokemon1}
          onChange={(e) => setPokemon1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pokémon 2"
          className="border rounded-md px-4 py-2 bg-gray-800 text-white placeholder-gray-400"
          value={pokemon2}
          onChange={(e) => setPokemon2(e.target.value)}
        />
      </div>
      <div className="flex justify-center mb-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={comparePokemon}>
          Comparar
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold">{pokemon1.toUpperCase()}</h3>
          {image1 && <img src={image1} alt={pokemon1} className="mx-auto my-2 w-64 h-64" />}
        </div>
        <div>
          <h3 className="text-lg font-bold">{pokemon2.toUpperCase()}</h3>
          {image2 && <img src={image2} alt={pokemon2} className="mx-auto my-2 w-64 h-64" />}
        </div>
      </div>
      {winner && (
        <div className="mt-4 text-lg font-bold">
          Ganador: {winner.toUpperCase()}
          {winnerCry && <audio src={winnerCry} autoPlay />}
        </div>
      )}
    </div>
  );
};

export default PokemonComparator;
