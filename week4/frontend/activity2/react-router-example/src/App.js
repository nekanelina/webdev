import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Navbar from "../../../../project/pair-programming-1/src/components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// ... (previous code)

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
