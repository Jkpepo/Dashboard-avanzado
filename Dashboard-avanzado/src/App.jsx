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
      </Routes>
    </Router>
  );
}

export default App;