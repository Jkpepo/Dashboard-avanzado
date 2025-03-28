import { useUser, RedirectToSignIn, SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react';

import { Layout } from '../pages/Layout';



function Login() {
  
  const { user, isLoaded } = useUser();
  console.log(user)
  console.log(useUser)

  if(!isLoaded){// isLoaded maneja el estado de carga
    return <div> Cargando ...</div>
  }
  if(!user){
    return <RedirectToSignIn/>
  }

  return (
    <div>
        <Layout></Layout>
    {/* <h1>Bienvenid@, {user.firstName}!</h1> */}
    {/* <SignedOut>
    <p>You are signed out.</p>
        <SignInButton/>
    </SignedOut> */}
    
    {/* <SignedIn >
        <UserButton/>
    </SignedIn> */}

   
  </div>
  )
}

export default Login
