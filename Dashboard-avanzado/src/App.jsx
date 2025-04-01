import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Index} from "./pages/Index";
import { List } from "./pages/List";
import Login from "./auth/Login";
import SpiderChart from './componentsApp/SpiderChart';
import "./App.css";
import { Layout } from "./pages/Layout";
import { PokemonProvider } from "./context/UseContext";
import { ListPokemons } from "./componentsApp/ListPokemons";
import { PokemonDetails } from "./componentsApp/PokemonDetails";
import PokemonRanking from "./components/ui/PokeRanking";

function App() {
  return (
    <PokemonProvider>

    <Router>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/companies" element={<Layout><ListPokemons /></Layout> } />
        <Route path="/calendar" element={<Layout><List /></Layout> } />
        <Route path="/calendar/:id" element={<Layout><PokemonDetails/></Layout> } />
        <Route path="/poke-rang" element={<Layout><PokemonRanking/></Layout> } />
        <Route path="/login" element={<Login />} />
        <Route path="/spider-chart" element={<Layout><SpiderChart /></Layout>} />
      </Routes>
    </Router>
    </PokemonProvider>
  );
}

export default App;