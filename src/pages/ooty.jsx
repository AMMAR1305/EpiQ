import React, { useState, useEffect } from "react";
import {
  FaLandmark,
  FaUtensils,
  FaHotel,
  FaPlane,
  FaTrain,
  FaBusAlt,
  FaTree,
  FaMusic,
} from "react-icons/fa";
import ooty from "../assets/ooty.jpg";

const DistrictPage = () => {
  const district = "Ooty";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Ooty, also known as Udhagamandalam, is a picturesque hill station nestled in the Nilgiri Hills of Tamil Nadu. Famous for its lush tea gardens, scenic landscapes, serene lakes, and pleasant weather, Ooty is fondly called the "Queen of Hill Stations."`;

  const attractions = [
    { name: "Ooty Lake", desc: "A serene artificial lake surrounded by gardens and boating facilities.", icon: <FaLandmark /> },
    { name: "Doddabetta Peak", desc: "The highest peak in Nilgiris offering breathtaking panoramic views.", icon: <FaTree /> },
    { name: "Botanical Gardens", desc: "A lush garden showcasing exotic plants and colorful flower beds.", icon: <FaTree /> },
    { name: "Tea Museum", desc: "Learn about tea production and explore artifacts depicting its history.", icon: <FaLandmark /> },
  ];

  const cuisines = [
    { name: "Homemade Chocolates", desc: "Locally crafted chocolates available in unique flavors.", icon: <FaUtensils /> },
    { name: "Nilgiri Tea", desc: "Aromatic tea harvested from the nearby tea estates.", icon: <FaUtensils /> },
    { name: "Varkey Biscuits", desc: "Crispy, flaky biscuits that are a local delicacy.", icon: <FaUtensils /> },
  ];

  const resorts = [
    { name: "Savoy Hotel", desc: "Luxury colonial-style accommodation with scenic mountain views.", icon: <FaHotel /> },
    { name: "Gem Park Ooty", desc: "A premium stay offering modern comfort amidst nature.", icon: <FaHotel /> },
    { name: "Sterling Ooty Fern Hill", desc: "Elegant resort with panoramic views and cozy ambience.", icon: <FaHotel /> },
  ];

  const festivals = [
    { name: "Ooty Summer Festival", month: "May", desc: "A vibrant festival featuring flower shows, boat races, and cultural events.", icon: <FaMusic /> },
    { name: "Tea and Tourism Festival", month: "October", desc: "Celebration of Ooty’s tea culture with exhibitions and performances.", icon: <FaMusic /> },
  ];

  const reach = [
    { mode: "By Air", desc: "Nearest airport is Coimbatore International Airport (approx. 88 km away).", icon: <FaPlane /> },
    { mode: "By Train", desc: "Connected by the scenic Nilgiri Mountain Railway from Mettupalayam.", icon: <FaTrain /> },
    { mode: "By Road", desc: "Well-connected by buses and taxis from Coimbatore, Mysuru, and Bengaluru.", icon: <FaBusAlt /> },
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const visible = {};
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          visible[sec.id] = true;
        }
      });
      setVisibleSections(visible);
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
          background: #fafafa;
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
          filter: brightness(60%);
          z-index: 1;
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
          margin-bottom: 0.5rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Sections */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(60px);
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

        /* Card Layout */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card h3 {
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #f59e0b;
          margin-bottom: 0.5rem;
        }

        /* Expand Button */
        .expand-btn {
          display: block;
          margin: 1.5rem auto;
          background: #b45309;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .expand-btn:hover {
          background: #92400e;
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="district-hero">
        <img src={ooty} alt="Ooty" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Queen of Hill Stations</p>
        </div>
      </div>

      {/* About Section */}
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

export default DistrictPage;
