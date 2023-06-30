import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout//structure/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/structure/Footer";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import Project from "./components/content/Project";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/frontend" element={<Frontend />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
