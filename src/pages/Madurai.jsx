import React, { useState, useEffect } from "react";
import {
  FaLandmark,
  FaUtensils,
  FaHotel,
  FaPlane,
  FaTrain,
  FaBusAlt,
  FaMusic,
  FaPagelines,
} from "react-icons/fa";
import madurai from "../assets/madurai.jpg";

const DistrictPage = () => {
  const district = "Madurai";
  const [expanded, setExpanded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const about = `Madurai, known as the Temple City, is one of the oldest cities in India. Famous for the historic Meenakshi Amman Temple, its rich culture, classical Tamil music, temple rituals, and vibrant festivals make it a unique spiritual and cultural destination.`;

  const attractions = [
    { name: "Meenakshi Amman Temple", desc: "Historic temple with stunning Dravidian architecture and spiritual significance.", icon: <FaLandmark /> },
    { name: "Thirumalai Nayakkar Palace", desc: "A 17th-century royal palace showcasing Indo-Saracenic architecture.", icon: <FaPagelines /> },
    { name: "Alagar Hills", desc: "Scenic hills known for their temple and natural beauty.", icon: <FaPagelines /> },
    { name: "Gandhi Memorial Museum", desc: "Dedicated to Mahatma Gandhi, showcasing India's freedom struggle.", icon: <FaLandmark /> },
  ];

  const cuisines = [
    { name: "Jigarthanda", desc: "A signature Madurai drink made with milk, almond gum, and sarsaparilla syrup.", icon: <FaUtensils /> },
    { name: "Idiyappam", desc: "Delicate steamed rice noodles served with coconut milk or spicy curry.", icon: <FaUtensils /> },
    { name: "Paruthi Paal", desc: "A traditional cotton seed milk drink with rich nutritional value.", icon: <FaUtensils /> },
  ];

  const resorts = [
    { name: "Heritage Madurai", desc: "Luxury stay blending modern comfort with heritage architecture.", icon: <FaHotel /> },
    { name: "The Gateway Hotel", desc: "Upscale accommodation offering excellent hospitality and local cuisine.", icon: <FaHotel /> },
    { name: "Boutique Stays", desc: "Charming small-scale accommodations reflecting local culture.", icon: <FaHotel /> },
  ];

  const festivals = [
    { name: "Chithirai Thiruvizha", month: "April / May", desc: "A grand festival celebrating the divine marriage of Goddess Meenakshi and Lord Sundareswarar.", icon: <FaMusic /> },
    { name: "Panguni Uthiram", month: "March / April", desc: "Temple festival marked by colorful processions and rituals.", icon: <FaMusic /> },
  ];

  const reach = [
    { mode: "By Air", desc: "Madurai International Airport offers direct flights to major Indian cities and select international destinations.", icon: <FaPlane /> },
    { mode: "By Train", desc: "Madurai Junction is a major rail hub well-connected with Chennai, Trichy, Coimbatore, and other key cities.", icon: <FaTrain /> },
    { mode: "By Road", desc: "Well-linked through NH38 and NH44, with frequent bus and taxi services from neighboring cities.", icon: <FaBusAlt /> },
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
        <img src={madurai} alt="Madurai" />
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Temple City of Tamil Nadu</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className={visibleSections["about"] ? "visible" : ""}>
        <h2>About {district}</h2>
        <p style={{ textAlign: "justify", fontSize: "1.1rem" }}>{about}</p>
      </section>

      {/* Top Attractions */}
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
