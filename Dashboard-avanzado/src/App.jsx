import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
import Login from "./auth/Login";
import { List } from "./pages/List";
import { Index} from "./pages/index";
import { Layout } from "./pages/Layout";
import SpiderChart from './componentsApp/SpiderChart';
import { PokemonProvider } from "./context/UseContext";
import { ListPokemons } from "./componentsApp/ListPokemons";
import { PokemonDetails } from "./componentsApp/PokemonDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Faqs } from "./pages/Faqs";


function App() {
  return (

    <PokemonProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/companies" element={<Layout><ListPokemons /></Layout> } />
        <Route path="/calendar" element={<Layout><List /></Layout> } />
        <Route path="/calendar/:id" element={<Layout><PokemonDetails/></Layout> } />
        <Route path="/faqs" element={<Layout><Faqs /></Layout> } />
        <Route path="/login" element={<Login />} />
        <Route path="/spider-chart" element={<Layout><SpiderChart /></Layout>} />
      </Routes>
    </Router>
    </PokemonProvider>

  );
}

export default App;