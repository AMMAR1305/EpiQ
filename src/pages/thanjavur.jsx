import React from "react";
import thanjavur from "../assets/thanjavur.jpg";

const ThanjavurPage = () => {
  const district = "Thanjavur";

  const about = `Thanjavur, also known as Tanjore, is famous for its rich cultural heritage, grand temples, and classical arts. It is the home of the UNESCO World Heritage Site, Brihadeeswarar Temple.`;

  const attractions = [
    { name: "Brihadeeswarar Temple", desc: "A UNESCO World Heritage Site and architectural marvel of the Chola dynasty." },
    { name: "Thanjavur Palace", desc: "Historical palace with museums showcasing art and history." },
    { name: "Art Gallery", desc: "Exhibits traditional Tanjore paintings and sculptures." },
  ];

  const cuisines = [
    { name: "Thanjavur Sweets", desc: "Famous sweets including laddu and mysore pak." },
    { name: "South Indian Meals", desc: "Traditional meals with rice, sambar, rasam, and curry." },
  ];

  const resorts = [
    { name: "Heritage Palace Hotel", desc: "Stay reflecting local heritage with modern amenities." },
    { name: "Comfort Stays", desc: "Convenient accommodations in the city center." },
  ];

  const festivals = [
    { name: "Natyanjali Dance Festival", month: "February", desc: "Classical dance festival at Brihadeeswarar Temple." },
  ];

  const reach = [
    { mode: "By Air", desc: "Nearest airport is Tiruchirappalli Airport, 60 km away." },
    { mode: "By Train", desc: "Thanjavur Railway Station connects major cities in Tamil Nadu." },
    { mode: "By Road", desc: "Accessible via NH67 and NH136 with buses and taxis." },
  ];

  return (
    <div className="district-page">
        <style>{`
        .district-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #fafafa;
          color: #222;
          line-height: 1.8;
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
          filter: brightness(65%);
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
        }

        .hero-text p {
          font-size: 1.5rem;
          margin-top: 0.5rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.5);
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 4rem auto;
          padding: 0 1rem;
        }

        section h2 {
          font-size: 2.4rem;
          text-align: center;
          color: #b45309;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        section p, li {
          font-size: 1.15rem;
          color: #333;
        }

        ul {
          list-style: none;
          padding-left: 0;
          margin-left: 0;
      }   


        /* Cards replaced by clean lists */
        .info-list {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }

        .info-list h3 {
          font-size: 1.4rem;
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .info-list small {
          display: block;
          color: #6b7280;
          margin-bottom: 0.3rem;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.8rem;
          }
          .hero-text p {
            font-size: 1.2rem;
          }
          section {
            margin: 2.5rem auto;
          }
        }
      `}</style>
      <div className="district-hero">
        <img src={thanjavur} alt="Thanjavur City" />
        <div className="hero-text"><h1>{district}</h1><p>The Cultural Capital of Tamil Nadu</p></div>
      </div>
      <section><h2>About {district}</h2><p style={{ textAlign: "justify" }}>{about}</p></section>
      <section><h2>Top Attractions</h2>{attractions.map((item, i) => <div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>)}</section>
      <section><h2>Famous Cuisines</h2>{cuisines.map((item, i) => <div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>)}</section>
      <section><h2>Resorts & Accommodation</h2>{resorts.map((item, i) => <div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>)}</section>
      <section><h2>Festivals</h2>{festivals.map((fest, i) => <div className="info-list" key={i}><h3>{fest.name}</h3><small>{fest.month}</small><p>{fest.desc}</p></div>)}</section>
      <section><h2>How to Reach {district}</h2>{reach.map((item, i) => <div className="info-list" key={i}><h3>{item.mode}</h3><p>{item.desc}</p></div>)}</section>
    </div>
  );
};

export default ThanjavurPage;
