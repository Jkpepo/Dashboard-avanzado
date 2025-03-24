import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider, RedirectToSignIn, useUser } from '@clerk/clerk-react';// Clerk es la biblioteca de todo la parte de login 
import './index.css'
import App from './App.jsx'

const llave_clerk= import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // clave que se conecta con el servicio de clerk

if (!llave_clerk) {
  throw  new Error("Error en la llave ")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={llave_clerk} afterSignOutUrl="/">
    <App />
    </ClerkProvider>
  </StrictMode>,
);