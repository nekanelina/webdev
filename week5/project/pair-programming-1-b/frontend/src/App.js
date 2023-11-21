import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="about" element={<About />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
