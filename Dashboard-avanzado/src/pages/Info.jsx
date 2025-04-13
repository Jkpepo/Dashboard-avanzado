import {
    BarChart3,
    ShieldCheck,
    SunMoon,
    LayoutDashboard,
    Swords,
    Users,
    Filter,
  } from "lucide-react";
  
  export default function Info() {
    return (
      <div className="p-6 grid gap-10  ">
        {/* Sección 1: Resumen con iconos */}
        <div className="grid gap-4 text-center ">
          <h2 className="text-2xl font-bold">¿Qué puedes hacer en Pokedash?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center ">
            <div className="flex flex-col items-center gap-2 ">
              <LayoutDashboard className="w-10 h-10 text-blue-500" />
              <p className="font-semibold">Explora Pokémon</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="w-10 h-10 text-purple-500" />
              <p className="font-semibold">Consulta estadísticas</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-10 h-10 text-pink-500" />
              <p className="font-semibold">Ver evoluciones</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Swords className="w-10 h-10 text-red-500" />
              <p className="font-semibold">Comparar Pokémon</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SunMoon className="w-10 h-10 text-yellow-500" />
              <p className="font-semibold">Modo claro / oscuro</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-10 h-10 text-green-500" />
              <p className="font-semibold">Autenticación segura</p>
            </div>
          </div>
        </div>
  
        {/* Sección 2: Galería de imagenes */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold text-center">Galería de Pokedash</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
              alt="Charizard"
              className="rounded-xl shadow-2xl object-cover"
            />
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
              alt="Mewtwo"
              className="rounded-xl shadow-2xl object-cover"
            />
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
              alt="Arceus"
              className="rounded-xl shadow-2xl object-cover"
            />
         
          </div>
        </div>
  
        {/* Sección 3: Información técnica */}
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tecnologías y Funcionalidades</h2>
          <p className="mb-2">
            <strong>🌗 Modo Claro / Oscuro:</strong> Interfaz adaptable según tus preferencias.
          </p>
          <p className="mb-2">
            <strong>🔐 Autenticación:</strong> Pokedash usa <span className="font-semibold">Clerk</span> para proteger tu sesión de forma segura y sencilla.
          </p>
          <p className="mb-2">
            <strong>📊 Estadísticas completas:</strong> Cada Pokémon incluye tipo, peso, altura y estadísticas base.
          </p>
          <p className="mb-2">
            <strong>🧬 Evoluciones:</strong> Visualiza todas las etapas evolutivas de un Pokémon.
          </p>
          <p className="mb-2">
            <strong>⚔️ Comparador:</strong> Elige dos Pokémon y compáralos estadísticamente para ver cuál es más fuerte.
          </p>
          <p className="mb-2">
            <strong>📋 Lista completa:</strong> Explora todos los Pokémon disponibles en la Pokédex oficial.
          </p>
        </div>
  
        {/* Sección 4: Álbum filtrable */}
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
            <Filter className="w-6 h-6 text-indigo-500" /> Álbum Pokémon Filtrable
          </h2>
          <p className="mb-2">
            <strong>🗂️ Álbum Interactivo:</strong> Puedes explorar una galería completa con todos los Pokémon disponibles.
          </p>
          <p className="mb-2">
            <strong>🔎 Filtros por Tipo:</strong> Usa filtros para encontrar Pokémon por su tipo (agua, fuego, planta, etc.) y descubre nuevas combinaciones.
          </p>
        </div>
      </div>
    );
  }
  