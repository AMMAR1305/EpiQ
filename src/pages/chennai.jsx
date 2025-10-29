import React, { useState, useEffect } from "react";
import { FaUmbrellaBeach, FaUtensils, FaHotel, FaTrain, FaPlane, FaBusAlt, FaMusic } from "react-icons/fa";
import chennai from "../assets/chennai.jpg";

const DistrictPage = () => {
  const district = "Chennai";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Chennai, the capital of Tamil Nadu, is a vibrant metropolitan city known for its cultural heritage, Marina Beach, temples, colonial architecture, and thriving IT industry.`;

  const attractions = [
    { name: "Marina Beach", desc: "Iconic beach stretching along the Bay of Bengal.", icon: <FaUmbrellaBeach /> },
    { name: "Kapaleeshwarar Temple", desc: "Historic Dravidian-style temple dedicated to Lord Shiva." },
    { name: "Fort St. George", desc: "Colonial fort showcasing British-era architecture and history." },
    { name: "Santhome Cathedral", desc: "Famous church built over the tomb of St. Thomas the Apostle." },
  ];

  const cuisines = [
    { name: "South Indian Breakfast", desc: "Idli, dosa, vada with coconut chutney and sambar.", icon: <FaUtensils /> },
    { name: "Filter Coffee", desc: "Strong and aromatic South Indian coffee.", icon: <FaUtensils /> },
  ];

  const resorts = [
    { name: "Taj Coromandel", desc: "Luxury hotel with world-class amenities.", icon: <FaHotel /> },
    { name: "The Leela Palace", desc: "Upscale accommodation with fine dining and heritage charm.", icon: <FaHotel /> },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Harvest festival celebrated with great enthusiasm.", icon: <FaMusic /> },
    { name: "Chennai Music Season", month: "Dec–Jan", desc: "Annual classical music festival attracting global artists.", icon: <FaMusic /> },
  ];

  const reach = [
    { mode: "By Air", desc: "Chennai International Airport is a major hub connecting India and the world.", icon: <FaPlane /> },
    { mode: "By Train", desc: "Chennai Central and Chennai Egmore connect to all major Indian cities.", icon: <FaTrain /> },
    { mode: "By Road", desc: "Well-connected through highways and city transport options.", icon: <FaBusAlt /> },
  ];

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const newVisibleSections = {};
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisibleSections[sec.id] = true;
        }
      });
      setVisibleSections(newVisibleSections);
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
          z-index: 1;
          filter: brightness(60%);
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
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Section styling */
        section {
          max-width: 1100px;
          margin: 3rem auto;
          padding: 0 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease;
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

        /* Expand Section */
        .expand-btn {
          display: block;
          margin: 1rem auto;
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

        /* Responsive */
        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.5rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="district-hero">
        <img src={chennai} alt="Chennai" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Capital City & Cultural Hub of Tamil Nadu</p>
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
