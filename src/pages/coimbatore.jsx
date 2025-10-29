import React, { useState, useEffect } from "react";
import { FaMountain, FaUtensils, FaHotel, FaPlane, FaTrain, FaBusAlt, FaSun } from "react-icons/fa";
import coimbatore from "../assets/coimbatore.jpg";

const CoimbatorePage = () => {
  const district = "Coimbatore";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Coimbatore, known as the Manchester of South India, is an industrial and educational hub in Tamil Nadu. It is famous for its textile heritage, IT industries, pleasant climate, and proximity to hill stations like Valparai and Ooty.`;

  const attractions = [
    { name: "Marudamalai Temple", desc: "Hilltop temple dedicated to Lord Murugan with scenic views.", icon: <FaMountain /> },
    { name: "VOC Park", desc: "Beautiful park with gardens, play areas, and recreational facilities.", icon: <FaSun /> },
    { name: "Siruvani Waterfalls", desc: "A serene waterfall surrounded by lush greenery and pure water sources.", icon: <FaMountain /> },
  ];

  const cuisines = [
    { name: "Coimbatore Biryani", desc: "Spiced rice dish unique to Coimbatore with rich flavor.", icon: <FaUtensils /> },
    { name: "Filter Coffee", desc: "Strong aromatic South Indian coffee with creamy froth.", icon: <FaUtensils /> },
  ];

  const resorts = [
    { name: "Heritage Hotel Coimbatore", desc: "Luxury accommodation blending tradition and comfort.", icon: <FaHotel /> },
    { name: "City Stays", desc: "Convenient and cozy hotels near major attractions.", icon: <FaHotel /> },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Harvest festival celebrated with vibrant traditions and joy.", icon: <FaSun /> },
    { name: "Koniamman Festival", month: "March", desc: "Annual temple festival honoring the city’s guardian deity.", icon: <FaSun /> },
  ];

  const reach = [
    { mode: "By Air", desc: "Coimbatore International Airport connects to major Indian cities and select international destinations.", icon: <FaPlane /> },
    { mode: "By Train", desc: "Coimbatore Junction offers rail connectivity to Chennai, Bangalore, and other metro cities.", icon: <FaTrain /> },
    { mode: "By Road", desc: "Accessible via NH544 and NH181 with frequent bus and taxi services.", icon: <FaBusAlt /> },
  ];

  // Scroll reveal animation logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const visibleNow = {};
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) visibleNow[sec.id] = true;
      });
      setVisibleSections(visibleNow);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="district-page">
      <style>{`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fafafa;
          color: #222;
          overflow-x: hidden;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .district-hero img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(65%);
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
          z-index: 2;
        }

        .hero-text {
          position: relative;
          z-index: 3;
          animation: fadeInUp 1.5s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        section h2 {
          text-align: center;
          color: #b45309;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        /* Card Grid */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.4rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.6rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.7rem 1.3rem;
          border-radius: 0.6rem;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.6rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="district-hero">
        <img src={coimbatore} alt="Coimbatore City" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Manchester of South India</p>
        </div>
      </div>

      {/* About */}
      <section id="about" className={visibleSections["about"] ? "visible" : ""}>
        <h2>About {district}</h2>
        <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>{about}</p>
      </section>

      {/* Attractions */}
      <section id="attractions" className={visibleSections["attractions"] ? "visible" : ""}>
        <h2>Top Attractions</h2>
        <div className="card-grid">
          {attractions.map((a, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{a.icon}</div>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cuisines */}
      <section id="cuisines" className={visibleSections["cuisines"] ? "visible" : ""}>
        <h2>Famous Cuisines</h2>
        <div className="card-grid">
          {cuisines.map((c, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{c.icon}</div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resorts */}
      <section id="resorts" className={visibleSections["resorts"] ? "visible" : ""}>
        <h2>Resorts & Accommodation</h2>
        <div className="card-grid">
          {resorts.map((r, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{r.icon}</div>
              <h3>{r.name}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Festivals */}
      <section id="festivals" className={visibleSections["festivals"] ? "visible" : ""}>
        <h2>Festivals</h2>
        <div className="card-grid">
          {festivals.map((f, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.name}</h3>
              <small>{f.month}</small>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Reach */}
      <section id="reach" className={visibleSections["reach"] ? "visible" : ""}>
        <h2>How to Reach {district}</h2>
        {expanded && (
          <div className="card-grid">
            {reach.map((r, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{r.icon}</div>
                <h3>{r.mode}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
        <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </section>
    </div>
  );
};

export default CoimbatorePage;
