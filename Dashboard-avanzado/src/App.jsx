import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Inicio } from "./pages";
import {Poke} from "./pages/Poke"
import Login from "./auth/Login";
import SpiderChart from './components/ui/SpiderChart';
import BarChartComponent from './components/ui/BarChartComponent';
import PokemoCardList from './components/ui/PokemonCardList';
import PokemonBattle from './components/ui/PokemonBattle';
import "./App.css";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>} />
        <Route path="/companies" element={<Layout><Poke /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/spider-chart" element={<Layout><SpiderChart /></Layout>} />
        <Route path="/bar-chart" element={<Layout><BarChartComponent /></Layout>} />
        <Route path="/poke-battle" element={<Layout><PokemonBattle /></Layout>} />
        <Route path="/Card-list" element={<Layout><PokemoCardList /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;