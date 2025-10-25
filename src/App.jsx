// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Destinations from "./Destinations";
import Tours from "./Tours";
import Culture from "./Culture";
import Wildlife from "./Wildlife";
import Cuisine from "./Cuisine";
import Resorts from "./Resorts";
import Festivals from "./Festivals";
import About from "./About";
import Contact from "./Contact";
import TourismManagementSystem from "./TourismManagementSystem";

function App() {
  return (
    <Router>
      <style>{`
        /* Global body styles */
        body, html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          
          background-color: #f9f9f9;
          color: #333;
        }

        /* Center content for 404 page */
        .not-found {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60vh;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          color: #ff0000;
        }

        /* Add some spacing between pages and navbar/footer */
        main {
          min-height: 70vh;
          padding: 2rem 1rem;
        }
      `}</style>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/TourismManagementSystem" element={< TourismManagementSystem/>} />
          <Route path="*" element={<div className="not-found">404 - Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
