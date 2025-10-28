import React from "react";
import tiruchirappalli from "../assets/tiruchirapalli.jpg";

const TiruchirappalliPage = () => {
  const district = "Tiruchirappalli";   

  const about = `Tiruchirappalli, also known as Trichy, is a vibrant city in Tamil Nadu with a rich history, temples, and educational institutions. Famous for its Rockfort Temple, it is an important cultural and religious hub.`;

  const attractions = [
    { name: "Rockfort Temple", desc: "Ancient fortress and temple complex perched on a massive rock." },
    { name: "Sri Ranganathaswamy Temple", desc: "One of the largest temple complexes in India, dedicated to Lord Ranganatha." },
    { name: "Jambukeswarar Temple", desc: "Historic temple known for its Dravidian architecture." },
    { name: "Kallanai Dam", desc: "Ancient dam built across the Kaveri River, a marvel of engineering." },
  ];

  const cuisines = [
    { name: "South Indian Thali", desc: "Traditional meal with rice, sambar, rasam, and various curries." },
    { name: "Mysore Pak", desc: "Sweet made with gram flour, ghee, and sugar." },
  ];

  const resorts = [
    { name: "Heritage Trichy", desc: "Comfortable stay blending modern amenities with local culture." },
    { name: "Hotel Sangam", desc: "Upscale hotel with excellent hospitality and local cuisine." },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Harvest festival celebrated with traditional fervor." },
    { name: "Car Festival", month: "April / May", desc: "Temple festival with decorated chariots and processions." },
  ];

  const reach = [
    { mode: "By Air", desc: "Tiruchirappalli International Airport connects major cities in India and select international destinations." },
    { mode: "By Train", desc: "Tiruchirappalli Junction connects the city with Chennai, Madurai, and other major cities." },
    { mode: "By Road", desc: "Well-connected through NH38 and NH83 with frequent buses and taxis." },
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
        <img src={tiruchirappalli} alt="Tiruchirappalli City" />
        <div className="hero-text"><h1>{district}</h1><p>The Rockfort City of Tamil Nadu</p></div>
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

export default TiruchirappalliPage;
