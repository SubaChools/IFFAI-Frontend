import Navbar from "./components/Navbar";

import RegisterLogin from "./pages/login";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterLogin />} />
        
      </Routes>
    </Router>
  );
}

export default App;
