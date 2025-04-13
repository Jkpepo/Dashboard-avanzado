import { useUser } from '@clerk/clerk-react';
import { Spiner } from '../componentsApp/Spiner';

export function Settings() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div className=' flex items-center justify-center min-h-screen  m-4 p-4  gap-4 text-3xl  '><Spiner/></div>;

  return (
    <div className="p-6 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Información de usuario</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.imageUrl}
          alt="Avatar"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <p className="text-xl font-semibold">{user.fullName}</p>
          <p className="text-sm text-gray-500">{user.primaryEmailAddress.emailAddress}</p>
        </div>
      </div>

  
      <div className="grid gap-4">
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl">
          <p className="font-semibold">Idioma</p>
          <p>Español</p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl">
          <p className="font-semibold">Notificaciones</p>
          <p>Activadas</p>
        </div>
      </div>
    </div>
  );
}