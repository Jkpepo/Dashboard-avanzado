import { useUser } from '@clerk/clerk-react';
import { Card, CardContent } from "@/components/ui/card";
import { useEffect,useState } from 'react';
import { Spiner } from '../componentsApp/Spiner';

export  function Security() {
  const { user, isLoaded } = useUser();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    if (user) {
      user.getSessions().then(setSessions);
    }
  }, [user]);

  if (!isLoaded) return <div className=' flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  '> <Spiner/></div>;

  // lastsignin es de clerk y es la fecha de ulrimo inicio de sesion del usuario
  //new Date(user.lastSignInAt) → convierte esa cadena en un objeto Date de JavaScript
  // toLocaleString() → convierte esa fecha a un formato legible para humanos según tu idioma y zona horaria.
// si el ussuario existe formatea y muestra de lo contrario No disponible
  const lastSignIn = user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleString() : "No disponible";




  return (
    <div className="  p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Seguridad de la cuenta</h2>

      <div className="  grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gray-200 dark:bg-gray-700 dark:text-white">
          <CardContent className=" p-4">
            <h3 className="font-semibold text-lg">Último inicio de sesión</h3>
            <p className="text-sm text-gray-400 mt-1">{lastSignIn}</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 dark:bg-gray-700 dark:text-white">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">Dispositivos activos</h3>
            <p className="text-sm text-gray-400 mt-1">{sessions.length} dispositivo(s)</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 dark:bg-gray-700 dark:text-white">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">ID de usuario</h3>
            <p className="text-sm text-gray-400 mt-1">{user.id}</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 dark:bg-gray-700 dark:text-white">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">Información básica</h3>
            <p className="text-sm text-gray-400 mt-1">Nombre: {user.firstName} {user.lastName}</p>
            <p className="text-sm text-gray-400">Correo: {user.emailAddresses[0].emailAddress}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}