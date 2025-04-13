
import { useEffect, useState } from "react";

export function Spiner() {
  const [pikachuSprite, setPikachuSprite] = useState("");

  useEffect(() => {
   
    const fetchPikachuSprite = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25"); 
        const data = await response.json();
        
      
        setPikachuSprite(data.sprites.versions["generation-v"]["black-white"].animated.front_default);
      } catch (error) {
        console.error("Error al obtener el sprite de Pikachu", error);
      }
    };

    fetchPikachuSprite(); // Llamamos a la función para obtener el sprite
  }, []);

  if (!pikachuSprite) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
    <img
      src={pikachuSprite}
      alt="Pikachu Corriendo"
      className="w-20 h-20"
    />
    <h1 className="mt-4 text-center">Cargando...</h1> 
  </div>
  );
}