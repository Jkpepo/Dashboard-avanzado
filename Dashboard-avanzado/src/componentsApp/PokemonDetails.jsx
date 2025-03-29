import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/UseContext";

export function PokemonDetails() {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const url_base= `https://pokeapi.co/api/v2/pokemon/${id}`
  const { nextPagePokemon,prevPagePokemon,page} =useContext(PokemonContext);

  useEffect(()=>{
         fetch(url_base)
         .then((result)=>result.json())
         .then((data)=>{
         setPokemonDetails(data)
         
         console.log("pokemone desde details",data) 
        
         })
     },[id])

     if (!pokemonDetails) {
        return <div className="text-center py-4">Cargando Pokémon...</div>;
    }

    return(
        <div className="bg-background rounded-lg p-5 m-4 shadow-lg mt-6">
            <div className="border">
            <strong>{pokemonDetails.id}</strong>

        <h1 className=" text-3xl font-bold capitalize ">
            {pokemonDetails.name}
        </h1>
        
        <h4>Peso: {(pokemonDetails.weight/10).toFixed(1)} kg</h4>
        <h4>Altura: {(pokemonDetails.height/10) } m</h4>
        <img
            src={pokemonDetails.sprites.other["official-artwork"].front_default}
            alt={pokemonDetails.name}
            className="mx-auto w-100 h-100"
            />
            </div>
            <div>
                    {pokemonDetails?.stats?.map((sta,id)=>{
                        return(
                        
                        <div key={id}>
                         <span className="capitalize font-medium">  {sta?.stat?.name}</span>
                         
                         <progress value={sta.base_stat} max={150}>  </progress>
                          <span className="font-bold">  {sta.base_stat}</span>



                        </div>
                        )

                    })}

            </div>
            <div>
                    {pokemonDetails?.types?.map((type,id)=>{
                        return(

                            <div className="  "key={id}>
                            <h1 className="flex justify-center"> {type.type.name}</h1>
                            
                             </div>
                        
                    )
                    })}
                        <button
        onClick={prevPagePokemon}
        
        className={`gap-4 flex items-center text-center ${page === 0 ? "text-gray-400 cursor-not-allowed" : ""}`}
        
        >Anterior
    </button>
    <button
        onClick={nextPagePokemon}
        disabled={page === 130}
        className={` gap-4 flex items-center text-center ${page ===130  ? "text-gray-400 cursor-not-allowed" : ""}`}
      >Siguiente 
    </button>
            </div>
        </div>
    )
}