// este componente me permite customizar el icono como tal agregarle unas clases o lo que se requiera
// y tambien para que sea dinamico
// lo paso a CardSumary como prop y en el index donde renderizo todo solo se pone el nombre del icono
// los iconos los estoy usando de Lucide icons

export function CustomIcon({ icon: Icon }) {
  return (
    <div className="p-2 bg-slate-400/20 rounded-lg w-10">
      <Icon />
    </div>
  );
}
