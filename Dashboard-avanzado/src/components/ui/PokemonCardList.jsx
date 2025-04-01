import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PokemonCardList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPokemonList = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.other["official-artwork"].front_default,
            types: details.types.map((t) => t.type.name),
          };
        })
      );
      setPokemonList((prev) => [...prev, ...pokemonData]);
      setOffset((prev) => prev + 20);
    } catch (error) {
      console.error("Error fetching Pokémon list:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        fetchPokemonList();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center">Lista de Pokémon</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-4 shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-24 h-24 mx-auto"
            />
            <h3 className="mt-2 text-lg capitalize">{pokemon.name}</h3>
            <p className="text-sm text-gray-400">{pokemon.types.join(", ")}</p>
          </motion.div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Cargando más Pokémon...</p>}
    </div>
  );
};

export default PokemonCardList;
