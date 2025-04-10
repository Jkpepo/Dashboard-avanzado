import { useUser} from "@clerk/clerk-react";
import { Spiner } from "../componentsApp/Spiner";
import { Outlet } from "react-router-dom";
// Outlet es un marcador de posicion que practicamente dice  aqui es donde voy a renderizar las rutas hijas
// ProtectedRoutes es el componente principal (como el "papá")
// todas las otras rutass que estan dentro son las hijas (estan en App.jsx)
// este componente me protege las rutas 


export function ProtectedRoutes() {
  const { user, isLoaded } = useUser();
  // Mientras carga el estado del usuario
  if (!isLoaded) return<div className=' flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  '>Cargando... <Spiner/></div>;;
  if (!user) {
    // esto lo hago para que me redirija a login porque no hay usuario logueado

    window.location.href = "/login";
    return null;
  }
  return <Outlet/>;// aqui cargan las rutas hijas que serian ranking,settings,etc todas si estoy logeado
}