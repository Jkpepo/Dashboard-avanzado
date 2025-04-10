import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spiner } from "./Spiner";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const PokemonCardList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState(null); // estado para guardar el tipo seleccionado

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1302"
        );
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
        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemons();
  }, []);

  if (loading)
    return (
      <div className=" flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  ">
        Cargando... <Spiner />
      </div>
    );
  return (
    <div className="p-6 bg-gray-200 rounded-lg text-black dark:bg-gray-700 dark:text-white ">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Todos los Pokémon
      </h2>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {/* object eentries convierte el obejto a un array de arrays tipo [["fire","y color que pertenece"]] */}
        {Object.entries(typeColors).map(([type, color]) => (
          // me crea un boton por cada tipo
          <button
            key={type}
            onClick={() => setSelectedType(type === selectedType ? null : type)}
            className={`px-4 py-1 rounded-full text-white font-semibold shadow-md transition ${
              selectedType === type ? "ring-2 ring-white scale-105" : ""
            }`}
            style={{ backgroundColor: color }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setSelectedType(null)}
          className={`px-4 py-1 rounded-full font-semibold shadow-md transition ${
            selectedType === null
              ? "ring-2 ring-white scale-105 bg-black text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Todos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* muestra solo pokemones que incluyan el selectype si no hay ninguno pues sera null y muestra todos */}
        {pokemonList
          .filter(
            (pokemon) => !selectedType || pokemon.types.includes(selectedType)
          )

          .map((pokemon, index) => {
            const mainType = pokemon.types[0];
            const bgColor = typeColors[mainType] || "#333";

            return (
              <motion.div
                key={index}
                className="rounded-lg p-4 shadow-lg text-center"
                style={{ backgroundColor: bgColor }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-24 h-24 mx-auto"
                />
                <h3 className="mt-2 text-lg capitalize">{pokemon.name}</h3>
                <p className="text-sm">{pokemon.types.join(", ")}</p>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonCardList;
