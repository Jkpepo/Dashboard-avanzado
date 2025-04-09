import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Layout } from "../pages/Layout";

export function ProtectedRoutes({ children }) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div className="text-center mt-10 text-lg">Cargando...</div>;
  if (!user) return <RedirectToSignIn />;

  return <Layout>{children}</Layout>;
}