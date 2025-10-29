import React, { useState, useEffect } from "react";
import {
  FaLandmark,
  FaUmbrellaBeach,
  FaUtensils,
  FaHotel,
  FaBusAlt,
  FaTrain,
  FaPlane,
  FaMusic,
} from "react-icons/fa";
import mahabalipuram from "../assets/mahabalipuram.jpg";

const DistrictPage = () => {
  const district = "Mahabalipuram";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Mahabalipuram, also known as Mamallapuram, is a historic coastal town in Tamil Nadu famous for its UNESCO World Heritage temples, rock-cut monuments, and Pallava-era architecture. The town is a perfect blend of history, spirituality, and scenic beauty along the Bay of Bengal.`;

  const attractions = [
    {
      name: "Shore Temple",
      desc: "Ancient temple overlooking the Bay of Bengal, part of UNESCO World Heritage Site.",
      icon: <FaLandmark />,
    },
    {
      name: "Pancha Rathas",
      desc: "Five monolithic rock temples shaped like chariots, carved from a single stone.",
      icon: <FaLandmark />,
    },
    {
      name: "Arjuna’s Penance",
      desc: "Massive open-air rock relief depicting scenes from Hindu mythology.",
      icon: <FaLandmark />,
    },
    {
      name: "Mahabalipuram Beach",
      desc: "Beautiful sandy beach perfect for relaxation and photography.",
      icon: <FaUmbrellaBeach />,
    },
  ];

  const cuisines = [
    {
      name: "Seafood Curry",
      desc: "Freshly caught fish and prawns cooked with rich South Indian spices.",
      icon: <FaUtensils />,
    },
    {
      name: "Idiyappam with Coconut Milk",
      desc: "Steamed rice noodles served with flavorful coconut milk or spicy curry.",
      icon: <FaUtensils />,
    },
    {
      name: "Traditional Tamil Thali",
      desc: "A wholesome platter of rice, sambar, rasam, poriyal, and dessert.",
      icon: <FaUtensils />,
    },
  ];

  const resorts = [
    {
      name: "Chariot Beach Resort",
      desc: "Luxury seaside resort offering scenic views and modern comforts.",
      icon: <FaHotel />,
    },
    {
      name: "Radisson Blu Resort Temple Bay",
      desc: "Upscale resort with private villas, infinity pools, and oceanfront dining.",
      icon: <FaHotel />,
    },
    {
      name: "Ideal Beach Resort",
      desc: "Family-friendly resort with beach access and cultural shows.",
      icon: <FaHotel />,
    },
  ];

  const festivals = [
    {
      name: "Mahabalipuram Dance Festival",
      month: "December – January",
      desc: "Celebration of classical dance and music, held at the Shore Temple complex.",
      icon: <FaMusic />,
    },
    {
      name: "Pongal Festival",
      month: "January",
      desc: "Harvest festival filled with traditional rituals, feasts, and decorations.",
      icon: <FaMusic />,
    },
  ];

  const reach = [
    {
      mode: "By Air",
      desc: "Nearest airport is Chennai International Airport (approx. 60 km away).",
      icon: <FaPlane />,
    },
    {
      mode: "By Train",
      desc: "Nearest railway station is Chengalpattu (approx. 30 km), connected via local taxis and buses.",
      icon: <FaTrain />,
    },
    {
      mode: "By Road",
      desc: "Easily accessible from Chennai via East Coast Road (ECR) by bus, cab, or private vehicle.",
      icon: <FaBusAlt />,
    },
  ];

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const newVisible = {};
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisible[sec.id] = true;
        }
      });
      setVisibleSections(newVisible);
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
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
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
          .hero-text h1 { font-size: 2.8rem; }
          .hero-text p { font-size: 1rem; }
          section h2 { font-size: 1.8rem; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="district-hero">
        <img src={mahabalipuram} alt="Mahabalipuram" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Where History Meets the Sea</p>
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

export default DistrictPage;
