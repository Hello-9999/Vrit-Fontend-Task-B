import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Trek from "./pages/Trek/Trek";

function App() {

  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trekdetails" element={<Trek />} />
      </Routes>
    </>
  );
}

export default App;
