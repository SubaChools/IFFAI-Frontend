import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegisterLogin from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/register" element={<RegisterLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
