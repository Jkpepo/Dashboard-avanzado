import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Inicio } from "./pages";

import Login from "./auth/Login";
import "./App.css";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <>
      <Router>
      <Layout>
        <Inicio />
      </Layout>
  <Routes>
          {/* <Route path="/" element={<Inicio/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<Login />}/> */}
         
  </Routes>
  </Router>
    </>
  );
}

export default App;
