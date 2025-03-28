import { createContext, useState, useEffect } from "react";

export const PokemonContext=createContext();

export function PokemonProvider({children}){
    const pokemonsPerPage=10
    const [pokemons,setPokemons]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [page,setPage]=useState(0);
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${page *pokemonsPerPage}`;


    useEffect(()=>{
        fetch(url)
        .then((result)=>result.json())
        .then((data)=>{
        setPokemons(data.results)
        console.log(pokemons) 
        console.log("pokemones",data) 
        console.log("types",data.next) 
        })
    },[page])


    const nextPagePokemon=()=>{
        setPage(page+1)
    }
    
    const prevPagePokemon=()=>{
        setPage(page-1)
    }
    

   return(
    <PokemonContext.Provider value={{pokemons,page,setPage,pokemonsPerPage,nextPagePokemon,prevPagePokemon}}>

    {children}
    </PokemonContext.Provider>
   
   )

   
}


