import { createContext, useState, useEffect } from "react";

export const PokemonContext=createContext();

export function PokemonProvider({children}){
    
    //me traigo una cantidad de pokemones por pagina en este caso 5
    // lo que me permite es que cuando abajo presione el boton de siguiente
    // me multiplica la pagina por el numero de pokemonsPerPage

    const pokemonsPerPage=5
    const [pokemons,setPokemons]=useState([])
    const [pokemonsDetails,setPokemonsDetails]=useState([])
    const [page,setPage]=useState(0);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [totalTypes, setTotalTypes] = useState(0);
    const [totalGenerations, setTotalGenerations] = useState(0);

    const urlPagination = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsPerPage}&offset=${page *pokemonsPerPage}`;
   

    //cada vez que la page cambie me actualiza la peticion 
    useEffect(()=>{
        fetch(urlPagination)
        .then((result)=>result.json())
        .then((data)=>{
        setPokemons(data.results)
        
        console.log("pokemones",data) 
       
        })
    },[page])



    ////////////Total Pokemones /////

    useEffect(() => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
          .then((res) => res.json())
          .then((data) => setTotalPokemons(data.count));

////////// Total Tipos de pokemones/////
          fetch("https://pokeapi.co/api/v2/type")
          .then((res) => res.json())
          .then((data) => setTotalTypes(data.count));
///////////// Total genernaciones///
          fetch("https://pokeapi.co/api/v2/generation")
        .then((res) => res.json())
        .then((data) => setTotalGenerations(data.count));
}, []);

 

// cambio de paginas
    const nextPagePokemon=()=>{
      
            setPage(page+1)
        
    }
    
    const prevPagePokemon=()=>{
        setPage(page-1)
    }
    

   return(
    <PokemonContext.Provider value={{pokemons,
    pokemonsDetails,
    page,
    setPage,
    pokemonsPerPage,
    nextPagePokemon,
    prevPagePokemon,
   totalPokemons,
   totalGenerations,
   totalTypes,
    
    }}>

    {children}
    </PokemonContext.Provider>
   
   )

   
}


