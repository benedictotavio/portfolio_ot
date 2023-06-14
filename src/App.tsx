import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Backend from "./pages/Backend";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backend" element={<Backend />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
