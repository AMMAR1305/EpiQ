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
import Madurai from "./pages/Madurai";
import OotyPage from "./pages/ooty";
import Mahabalipuram from "./pages/Mahabalipuram";
import Manimuthar from "./pages/manimuthar";
import Rameswaram from "./pages/rameswaram";
import Chennai from "./pages/chennai";
import Kodaikanal from "./pages/kodaikanal";
import Tiruchirappalli from "./pages/tiruchirappalli";
import Vellore from "./pages/vellore";
import Thanjavur from "./pages/thanjavur";
import Coimbatore from "./pages/coimbatore";
import Thirunelveli from "./pages/thirunelveli";
function App() {
  return (
    <Router basename="/">
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
          <Route path="/madurai" element={<Madurai />} />
          <Route path="/ooty" element={<OotyPage />} />
          <Route path="/mahabalipuram" element={<Mahabalipuram />} />
          <Route path="/manimuthar" element={<Manimuthar />} />
          <Route path="/rameswaram" element={<Rameswaram />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/kodaikanal" element={<Kodaikanal />} />
          <Route path="/tiruchirappalli" element={<Tiruchirappalli />} />
          <Route path="/vellore" element={<Vellore />} />
          <Route path="/thanjavur" element={<Thanjavur />} />
          <Route path="/coimbatore" element={<Coimbatore />} />
          <Route path="/thirunelveli" element={<Thirunelveli />} />
\          <Route path="/TourismManagementSystem" element={< TourismManagementSystem/>} />
          <Route path="*" element={<div className="not-found">404 - Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
