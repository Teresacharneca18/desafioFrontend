import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Backend from "./pages/Backend";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Frontend from "./pages/Frontend";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/backend" element={<Backend />}></Route>
          <Route path="/frontend" element={<Frontend />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
