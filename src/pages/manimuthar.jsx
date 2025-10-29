import React, { useState, useEffect } from "react";
import {
  FaLandmark,
  FaUtensils,
  FaHotel,
  FaPlane,
  FaTrain,
  FaBusAlt,
  FaWater,
  FaMountain,
  FaLeaf,
  FaMusic,
} from "react-icons/fa";
import manimuthar from "../assets/manimuthar.jpg";

const DistrictPage = () => {
  const district = "Manimuthar";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Manimuthar is a serene and picturesque destination in Tamil Nadu, renowned for its scenic waterfalls, lush green forests, tea plantations, and tranquil environment. It’s a perfect getaway for nature lovers, trekkers, and those seeking peace away from city life.`;

  const attractions = [
    {
      name: "Manimuthar Waterfalls",
      desc: "A majestic waterfall surrounded by dense forest, offering a refreshing natural escape.",
      icon: <FaWater />,
    },
    {
      name: "Manjolai Hills",
      desc: "Famous for its tea plantations and misty hills, ideal for trekking and nature photography.",
      icon: <FaMountain />,
    },
    {
      name: "Manimuthar Dam",
      desc: "A scenic reservoir with calm waters, perfect for relaxation and picnics.",
      icon: <FaLandmark />,
    },
    {
      name: "Kalakkad Mundanthurai Tiger Reserve",
      desc: "A biodiverse forest area home to tigers, elephants, and exotic bird species.",
      icon: <FaLeaf />,
    },
  ];

  const cuisines = [
    {
      name: "South Indian Meals",
      desc: "Authentic Tamil-style meals served on banana leaves with local spices and flavors.",
      icon: <FaUtensils />,
    },
    {
      name: "Local Tea",
      desc: "Freshly brewed tea sourced from the surrounding plantations — a refreshing experience.",
      icon: <FaUtensils />,
    },
    {
      name: "Traditional Snacks",
      desc: "Crispy vadai, murukku, and sundal are popular local treats.",
      icon: <FaUtensils />,
    },
  ];

  const resorts = [
    {
      name: "Manimuthar Eco Resort",
      desc: "Eco-friendly cottages located amidst lush greenery for a relaxing stay.",
      icon: <FaHotel />,
    },
    {
      name: "Hilltop Retreat",
      desc: "Offers breathtaking views of the Western Ghats and peaceful surroundings.",
      icon: <FaHotel />,
    },
    {
      name: "Forest View Homestay",
      desc: "A cozy stay that lets you experience the charm of rural life close to nature.",
      icon: <FaHotel />,
    },
  ];

  const festivals = [
    {
      name: "Pongal",
      month: "January",
      desc: "A harvest festival celebrated with joy, traditional rituals, and delicious food.",
      icon: <FaMusic />,
    },
    {
      name: "Aadi Festival",
      month: "July / August",
      desc: "Local celebration with temple processions, dance, and devotional music.",
      icon: <FaMusic />,
    },
  ];

  const reach = [
    {
      mode: "By Air",
      desc: "Nearest airport is Tuticorin Airport (around 80 km away), connected to major Tamil Nadu cities.",
      icon: <FaPlane />,
    },
    {
      mode: "By Train",
      desc: "Tirunelveli Railway Station is the closest major station, about 45 km from Manimuthar.",
      icon: <FaTrain />,
    },
    {
      mode: "By Road",
      desc: "Regular buses and taxis are available from Tirunelveli, Ambasamudram, and Nagercoil.",
      icon: <FaBusAlt />,
    },
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

        /* Section Styling */
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
        <img src={manimuthar} alt="Manimuthar" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Nature’s Hidden Paradise of Tamil Nadu</p>
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
