import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPaw,
  FaLeaf,
  FaMountain,
} from "react-icons/fa";
import mudhumalai from "./assets/mudhumalai.jpg";
import anamalai from "./assets/anamalai.webp";
import vedanthangal from "./assets/vedanthangal.avif";
import guindy from "./assets/guindy.jpg";
import kmtr from "./assets/kmtr.jpg";
import vallanadu from "./assets/vallanadu.webp";

function Wildlife() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const wildlifeSpots = [
    {
      title: "Mudumalai Wildlife Sanctuary",
      location: "Nilgiri Hills",
      desc: "A paradise for nature lovers, home to elephants, tigers, leopards, and over 250 species of birds.",
      details:
        "The sanctuary is part of the Nilgiri Biosphere Reserve and shares borders with Karnataka and Kerala. Safari rides and elephant camps make this place a top wildlife destination.",
      img: mudhumalai,
      icon: <FaPaw />,
    },
    {
      title: "Anamalai Tiger Reserve",
      location: "Coimbatore District",
      desc: "Known for its rich biodiversity with lion-tailed macaques, gaur, and endangered tigers.",
      details:
        "Formerly known as Indira Gandhi Wildlife Sanctuary, this reserve covers both tropical and montane forests. Trekking and eco-tourism are major attractions.",
      img: anamalai,
      icon: <FaMountain />,
    },
    {
      title: "Vedanthangal Bird Sanctuary",
      location: "Kanchipuram",
      desc: "One of the oldest bird sanctuaries in India, attracting migratory birds like pelicans and storks.",
      details:
        "During the winter, thousands of migratory birds from Europe and North America visit this sanctuary, making it a photographer’s dream.",
      img: vedanthangal,
      icon: <FaLeaf />,
    },
    {
      title: "Guindy National Park",
      location: "Chennai",
      desc: "An urban green haven with spotted deer, blackbucks, and a variety of bird species.",
      details:
        "Located right in Chennai city, this park also includes a children's park and snake park, making it a favorite weekend getaway.",
      img: guindy,
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Kalakkad Mundanthurai Tiger Reserve",
      location: "Tirunelveli",
      desc: "Dense forests with elephants, leopards, and rare bird species in the Western Ghats.",
      details:
        "The reserve is part of the Agasthyamalai Biosphere Reserve, offering trekking routes, waterfalls, and diverse ecosystems.",
      img: kmtr,
      icon: <FaMountain />,
    },
    {
      title: "Vallanadu Blackbuck Sanctuary",
      location: "Thoothukudi",
      desc: "Dedicated to the protection of the elegant blackbuck antelope in a serene environment.",
      details:
        "This small sanctuary is ideal for peaceful exploration, especially during early mornings when blackbucks are most active.",
      img: vallanadu,
      icon: <FaPaw />,
    },
  ];

  // Scroll Animation
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
    <div className="wildlife-page">
      <style>{`
        .wildlife-page {
          font-family: 'Poppins', sans-serif;
          background-color: #f0fdf4;
          color: #1e293b;
          overflow-x: hidden;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #065f46;
          margin: 2rem 0;
          border-bottom: 3px solid #10b981;
          display: inline-block;
          padding-bottom: 0.3rem;
        }

        section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wildlife-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 0.4rem;
        }

        .location {
          font-size: 1rem;
          font-weight: 600;
          color: #059669;
          margin-bottom: 0.7rem;
        }

        .desc {
          color: #374151;
          font-size: 1rem;
        }

        .expand-btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.4rem;
          background-color: #047857;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .expand-btn:hover {
          background-color: #065f46;
        }

        .extra-details {
          margin-top: 0.8rem;
          padding: 1rem;
          background-color: #ecfdf5;
          border-left: 4px solid #10b981;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="wildlife" className={visibleSections["wildlife"] ? "visible" : ""}>
        <h2>Wildlife of Tamil Nadu</h2>

        <div className="wildlife-grid">
          {wildlifeSpots.map((spot, index) => (
            <div className="card" key={index}>
              <img src={spot.img} alt={spot.title} />
              <div className="card-content">
                <div className="card-icon">{spot.icon}</div>
                <h3>{spot.title}</h3>
                <div className="location">{spot.location}</div>
                <p className="desc">{spot.desc}</p>

                <button
                  className="expand-btn"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  {expandedIndex === index ? "Hide Details" : "Explore More"}
                </button>

                {expandedIndex === index && (
                  <div className="extra-details">{spot.details}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Wildlife;
