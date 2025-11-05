import React, { useEffect } from "react";
import kodaikanal from "../assets/kodaikanal.jpeg";

const DistrictPage = () => {
  const district = "Kodaikanal";

  const about = `Kodaikanal is a serene hill station in the Western Ghats, known for its misty mountains, Kodaikanal Lake, waterfalls, and lush forests. It’s often called the “Princess of Hill Stations” for its peaceful ambiance and scenic beauty.`;

  const attractions = [
    { name: "Kodaikanal Lake", desc: "Star-shaped lake with boating and walking paths." },
    { name: "Coaker's Walk", desc: "Scenic pathway offering breathtaking valley views." },
    { name: "Bear Shola Falls", desc: "Popular waterfall amidst lush greenery." },
    { name: "Bryant Park", desc: "Botanical garden filled with vibrant flowers and rare plants." },
  ];

  const cuisines = [
    { name: "Homemade Chocolates", desc: "Delicious chocolates made from local cocoa." },
    { name: "Hill Station Snacks", desc: "Steamed corn, sandwiches, and baked goods." },
  ];

  const resorts = [
    { name: "Hilltop Resort", desc: "Comfortable stay with valley views." },
    { name: "Forest Lodges", desc: "Eco-friendly stays surrounded by nature." },
  ];

  const festivals = [
    { name: "Kodaikanal Summer Festival", month: "May", desc: "Floral shows, boat races, and cultural events." },
  ];

  const reach = [
    { mode: "By Road", desc: "Accessible via buses and taxis from Madurai and Coimbatore." },
  ];

  // Scroll to top button visibility
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) btn.style.display = "block";
      else btn.style.display = "none";
    });
  }, []);

  return (
    <div className="district-page">
      <style>{`
        .district-page {
          font-family: 'Poppins', sans-serif;
          background-color: #fdfdfd;
          color: #222;
          line-height: 1.8;
          scroll-behavior: smooth;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .district-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(70%);
          transform: scale(1.05);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          animation: fadeInUp 1.2s ease;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
        }

        .hero-text p {
          font-size: 1.4rem;
          margin-top: 0.8rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.5);
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 4rem auto;
          padding: 0 1rem;
          animation: fadeIn 1.2s ease;
        }

        section h2 {
          font-size: 2.4rem;
          text-align: center;
          color: #b45309;
          margin-bottom: 2rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        /* Info Grid Layout */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .info-card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .info-card h3 {
          color: #9a3412;
          margin-bottom: 0.6rem;
          font-size: 1.3rem;
        }

        .info-card p {
          color: #333;
          font-size: 1.1rem;
        }

        .info-card small {
          display: block;
          color: #6b7280;
          margin-bottom: 0.3rem;
        }

        /* Back to Top Button */
        #backToTop {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #b45309;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 50%;
          font-size: 1.3rem;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 100;
          transition: background 0.3s ease;
        }
        #backToTop:hover { background: #92400e; }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-text h1 { font-size: 2.8rem; }
          .hero-text p { font-size: 1.1rem; }
          section { margin: 3rem auto; }
        }
      `}</style>

      <div className="district-hero">
        <img src={kodaikanal} alt="Kodaikanal" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Hill Station & Nature Escape</p>
        </div>
      </div>

      <section>
        <h2>About {district}</h2>
        <p style={{ textAlign: "justify" }}>{about}</p>
      </section>

      <section>
        <h2>Top Attractions</h2>
        <div className="info-grid">
          {attractions.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Famous Cuisines</h2>
        <div className="info-grid">
          {cuisines.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Resorts & Accommodation</h2>
        <div className="info-grid">
          {resorts.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Festivals</h2>
        <div className="info-grid">
          {festivals.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.name}</h3>
              <small>{item.month}</small>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>How to Reach {district}</h2>
        <div className="info-grid">
          {reach.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.mode}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
      <button id="backToTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
  );
};

export default DistrictPage;
