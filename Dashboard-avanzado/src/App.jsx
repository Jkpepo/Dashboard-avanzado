
import "./App.css";
import Login from "./auth/Login";

import { Faqs } from "./pages/Faqs";
import { Index } from "./pages/index";
import { Layout } from "./pages/Layout";
import SpiderChart from "./componentsApp/SpiderChart";
import { PokemonProvider } from "./context/UseContext";
import { ListPokemons } from "./componentsApp/ListPokemons";
import { PokemonDetails } from "./componentsApp/PokemonDetails";
import PokemonRanking from "./componentsApp/PokeRanking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarChartComponent from './components/ui/BarChartComponent';
import PokemoCardList from './components/ui/PokemonCardList';
import PokemonBattle from './components/ui/PokemonBattle';

function App() {
  return (

    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/companies" element={<Layout><ListPokemons /></Layout>} />
          <Route path="/calendar" element={<Layout><PokemonRanking /></Layout>} />
          <Route path="/calendar/:id" element={<Layout><PokemonDetails /></Layout>} />
          <Route path="/poke-rank" element={<Layout><PokemonRanking /></Layout>} />
          <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/spider-chart" element={<Layout><SpiderChart /></Layout>} />
          <Route path="/bar-chart" element={<Layout><BarChartComponent /></Layout>} />
        <Route path="/poke-battle" element={<Layout><PokemonBattle /></Layout>} />
        <Route path="/Card-list" element={<Layout><PokemoCardList /></Layout>} />
        </Routes>
      </Router>
    </PokemonProvider>

  );
}

export default App;