import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFound from "./components/NotFound";
import "./app.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* {/ Added other routes if you want/} */}
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="" element={<NotFound />} /> */}
          {/* Added this line for 404 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
