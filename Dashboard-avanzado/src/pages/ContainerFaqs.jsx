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
          <AccordionTrigger>¿Qué es Pokémon?</AccordionTrigger>
          <AccordionContent>
            Pokémon es una franquicia de medios creada por Satoshi Tajiri y Ken
            Sugimori,que incluye videojuegos,juegos de cartas,series de
            televisión,películas, y más.En el mundo Pokémon,los entrenadores
            capturan y entrenan criaturas llamadas "Pokémon" para luchar en
            combates.
          </AccordionContent>
          {/* item-2 */}
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> ¿Qué son los tipos de Pokémon?</AccordionTrigger>
          <AccordionContent>
            Los Pokémon están clasificados en 18 tipos diferentes, como Fuego,
            Agua, Eléctrico, Planta, Psíquico, Hada, etc. Cada tipo tiene sus
            propias fortalezas y debilidades en combate, lo que afecta las
            interacciones durante los enfrentamientos.
          </AccordionContent>
          {/* item-3 */}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Qué son las estadísticas de un Pokémon?
          </AccordionTrigger>
          <AccordionContent>
            Las estadísticas de un Pokémon incluyen su HP (salud), Ataque,
            Defensa, Velocidad, Especial Attack (Ataque Especial) y Especial
            Defense (Defensa Especial). Estas estadísticas determinan la
            efectividad de un Pokémon en combate, y mejorar estas estadísticas
            es clave para ganar batallas.
          </AccordionContent>
          {/* item-4 */}
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            ¿Cómo funciona el sistema de tipo en combate?
          </AccordionTrigger>
          <AccordionContent>
            Cada tipo tiene fortalezas y debilidades. Por ejemplo, un Pokémon de
            tipo fuego es fuerte contra los de tipo planta pero débil contra los
            de tipo agua. Conocer las interacciones entre tipos es crucial para
            ganar batallas, ya que puedes aprovechar las ventajas de un tipo
            sobre otro.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>¿Cuántos Pokémon existen en total?</AccordionTrigger>
          <AccordionContent>
          Hasta la octava generación de Pokémon, existen un total de 898 Pokémon. 
          Este número incluye todas las especies de Pokémon desde la Primera Generación (Kanto) hasta la Octava Generación (Galar).
          </AccordionContent>
          {/* item-5 */}
        </AccordionItem>
      </Accordion>
     
    )
}

