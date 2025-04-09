
import "./App.css";
import Login from "./auth/Login";
import { Faqs } from "./pages/Faqs";
import { Index } from "./pages/index";
import { Layout } from "./pages/Layout";
import SpiderChart from "./componentsApp/SpiderChart";
import { PokemonProvider } from "./context/UseContext";
import PokemonRanking from "./componentsApp/PokeRanking";
import PokemonBattle from './componentsApp/PokemonBattle';
import { ListPokemons } from "./componentsApp/ListPokemons";
import PokemoCardList from './components/ui/PokemonCardList';
import { PokemonDetails } from "./componentsApp/PokemonDetails";
import BarChartComponent from './componentsApp/BarChartComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./auth/ProtectedRoutes";

function App() {
  return (

    <PokemonProvider>
      <Router>
        <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={ <Layout><Index /></Layout>} />
          <Route path="/companies" element={<Layout><ListPokemons /></Layout>} />
          <Route path="/calendar" element={<Layout><PokemonRanking /></Layout>} />
          <Route path="/calendar/:id" element={<Layout><PokemonDetails /></Layout>} />
          <Route path="/poke-rank" element={<Layout><PokemonRanking /></Layout>} />
          <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
          <Route path="/spider-chart" element={<Layout><SpiderChart /></Layout>} />
          <Route path="/bar-chart" element={<Layout><BarChartComponent /></Layout>} />
          <Route path="/poke-battle" element={<Layout><PokemonBattle /></Layout>} />
          <Route path="/Card-list" element={<Layout><PokemoCardList /></Layout>} />
        </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </PokemonProvider>

  );
}

export default App;