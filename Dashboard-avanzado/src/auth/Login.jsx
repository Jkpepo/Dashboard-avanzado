import { SignIn, useUser } from "@clerk/clerk-react";
import { Spiner } from "../componentsApp/Spiner";
function Login() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div className=' flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  '><Spiner/></div>;

  if (isSignedIn) {
    // Si ya está logueado, redirige al home 
    window.location.href = "/";
    return null;
  }
  // / modifique este componente ya que como lo tenia con el redirect si bien es una propiedad de clark
  // pero el problema es que me lo maneja desde una ruta de el y yo queria que todo corriera desde mi ruta local
  // entonces Sigin me permite esto

  // Se usa <SignIn /> con `path="/login"` para mantener la autenticación en rutas locales
// evitando el uso de rutas externas por defecto de Clerk.
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className=" text-center text-4xl font-bold  mb-8">¡Bienvenido a Pokedash!</h1>
      <SignIn path="/login" routing="path" />
    </div>
  );
}

export default Login;