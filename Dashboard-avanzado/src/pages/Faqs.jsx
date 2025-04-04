import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
  return (
    <div className="text-xl font-bold max-w-prose dark:bg-gray-900 text-slate-100">
      <h1>Prguntas frecuentes</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>¿ Qué es Pokémon?</AccordionTrigger>
          <AccordionContent>
            Pokémon es una franquicia de medios creada por Satoshi Tajiri y Ken Sugimori,que incluye
            videojuegos,juegos de cartas,series de televisión,películas, y más.En el mundo Pokémon,los entrenadores
            capturan y entrenan criaturas llamadas "Pokémon" para luchar en combates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
