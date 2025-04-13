import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContainerFaqs(){
    return(
<Accordion type="single" collapsible>
        
        {/* item-1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-md">¿Qué es Pokémon?</AccordionTrigger>
          <AccordionContent className="tracking-widest" >
            Pokémon es una franquicia de medios creada por Satoshi Tajiri y Ken
            Sugimori,que incluye videojuegos,juegos de cartas,series de
            televisión,películas, y más.En el mundo Pokémon,los entrenadores
            capturan y entrenan criaturas llamadas "Pokémon" para luchar en
            combates.
          </AccordionContent>
          {/* item-2 */}
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" text-md"> ¿Qué son los tipos de Pokémon?</AccordionTrigger>
          <AccordionContent className="tracking-widest" >
            Los Pokémon están clasificados en 18 tipos diferentes, como Fuego,
            Agua, Eléctrico, Planta, Psíquico, Hada, etc. Cada tipo tiene sus
            propias fortalezas y debilidades en combate, lo que afecta las
            interacciones durante los enfrentamientos.
            Aúnque en esta Api donde traemos la información hay 3 tipos mas no oficiales
            y de pruebas,pero son 18 en total los oficiales.
          </AccordionContent>
          {/* item-3 */}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className=" text-md">
            ¿Qué son las estadísticas de un Pokémon?
          </AccordionTrigger>
          <AccordionContent className="tracking-widest" >
            Las estadísticas de un Pokémon incluyen su HP (salud), Ataque,
            Defensa, Velocidad, Especial Attack (Ataque Especial) y Especial
            Defense (Defensa Especial). Estas estadísticas determinan la
            efectividad de un Pokémon en combate, y mejorar estas estadísticas
            es clave para ganar batallas.
          </AccordionContent>
          {/* item-4 */}
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className=" text-md">
            ¿Cómo funciona el sistema de tipo en combate?
          </AccordionTrigger>
          <AccordionContent className="tracking-widest" >
            Cada tipo tiene fortalezas y debilidades. Por ejemplo, un Pokémon de
            tipo fuego es fuerte contra los de tipo planta pero débil contra los
            de tipo agua. Conocer las interacciones entre tipos es crucial para
            ganar batallas, ya que puedes aprovechar las ventajas de un tipo
            sobre otro.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className=" text-md">¿Cuántos Pokémon existen en total?</AccordionTrigger>
          <AccordionContent className="tracking-widest" >
          Hasta la novena generación de Pokémon, existen un total de 1010 Pokémon. 
          Este número incluye todas las especies de Pokémon desde la Primera Generación (Kanto) hasta la Novena Generación (Paldea).
          La Api nos trae como resultado 1032 ya que tiene algunos datos repetidos o algunos no oficiales,pero son
          1010 oficiales  en total hasta el momento.
          </AccordionContent>
          {/* item-5 */}
        </AccordionItem>
      </Accordion>
     
    )
}

