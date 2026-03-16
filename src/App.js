import "./App.css";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackToTopButton from "./Components/BacktoTopButton/BacktoTopButton";
import Header from "./Generic Views/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Tablets from "./Pages/Tablets/Tablets";
import Capsules from "./Pages/Capsules/Capsules";
import Syrups from "./Pages/Syrups/Syrups";
import ProtienAndDrops from "./Pages/ProtienAndDrops/ProtienAndDrops";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Generic Views/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/tablets" element={<Tablets />} />
            <Route path="/products/capsules" element={<Capsules />} />
            <Route path="/products/syrups" element={<Syrups />} />
            <Route path="/products/protien&drops" element={<ProtienAndDrops />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
        <BackToTopButton/>
      </div>
    </Router>
  );
};

export default App;
