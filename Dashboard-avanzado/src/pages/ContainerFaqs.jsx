import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContainerFaqs() {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      
      {/* item-1 */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-md">¿Qué es Pokémon?</AccordionTrigger>
        <AccordionContent className="tracking-widest">
          Pokémon es una franquicia de medios creada por Satoshi Tajiri y Ken Sugimori, que incluye videojuegos, juegos de cartas, series de televisión, películas y más. 
          En el mundo Pokémon, los entrenadores capturan y entrenan criaturas llamadas "Pokémon" para competir en combates.
        </AccordionContent>
      </AccordionItem>

      {/* item-2 */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-md">¿Qué son los tipos de Pokémon?</AccordionTrigger>
        <AccordionContent className="tracking-widest">
          Los Pokémon están clasificados en 18 tipos diferentes, como Fuego, Agua, Eléctrico, Planta, Psíquico, Hada, entre otros. 
          Cada tipo tiene sus fortalezas y debilidades en combate, lo que afecta las interacciones durante las batallas.
          Aunque en esta API donde obtenemos la información aparecen 3 tipos adicionales no oficiales (de prueba), los tipos oficiales son 18.
        </AccordionContent>
      </AccordionItem>

      {/* item-3 */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-md">¿Qué son las estadísticas de un Pokémon?</AccordionTrigger>
        <AccordionContent className="tracking-widest">
          Las estadísticas de un Pokémon incluyen su HP (puntos de salud), Ataque, Defensa, Velocidad, Ataque Especial y Defensa Especial.
          Estas estadísticas determinan su rendimiento en combate, y mejorar estas cifras es clave para obtener la victoria.
        </AccordionContent>
      </AccordionItem>

      {/* item-4 */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-md">¿Cómo funciona el sistema de tipo en combate?</AccordionTrigger>
        <AccordionContent className="tracking-widest">
          Cada tipo tiene ventajas y desventajas. Por ejemplo, un Pokémon de tipo Fuego es fuerte contra los de tipo Planta, pero débil contra los de tipo Agua.
          Conocer estas interacciones es fundamental para planear estrategias efectivas en combate.
        </AccordionContent>
      </AccordionItem>

      {/* item-5 */}
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-md">¿Cuántos Pokémon existen en total?</AccordionTrigger>
        <AccordionContent className="tracking-widest">
          Hasta la novena generación de Pokémon, existen oficialmente 1010 especies. 
          La API nos devuelve 1032 resultados, ya que incluye algunos datos repetidos o no oficiales. 
          Sin embargo, los Pokémon oficiales suman 1010 hasta la fecha.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  );
}
