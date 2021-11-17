// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Routes, Route } from "react-router-dom";
// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
