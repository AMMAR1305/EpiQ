import React from "react";
import chennai from "../assets/chennai.jpg";

const DistrictPage = () => {
  const district = "Chennai";

  const about = `Chennai, the capital of Tamil Nadu, is a vibrant metropolitan city known for its cultural heritage, Marina Beach, temples, colonial architecture, and thriving IT industry.`;

  const attractions = [
    { name: "Marina Beach", desc: "Iconic beach stretching along the Bay of Bengal." },
    { name: "Kapaleeshwarar Temple", desc: "Historic Dravidian-style temple dedicated to Lord Shiva." },
    { name: "Fort St. George", desc: "Colonial fort showcasing British-era architecture and history." },
    { name: "Santhome Cathedral", desc: "Famous church built over the tomb of St. Thomas the Apostle." },
  ];

  const cuisines = [
    { name: "South Indian Breakfast", desc: "Idli, dosa, vada with coconut chutney and sambar." },
    { name: "Filter Coffee", desc: "Strong and aromatic South Indian coffee." },
  ];

  const resorts = [
    { name: "Taj Coromandel", desc: "Luxury hotel with world-class amenities." },
    { name: "The Leela Palace", desc: "Upscale accommodation with fine dining and heritage charm." },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Harvest festival celebrated with great enthusiasm." },
    { name: "Chennai Music Season", month: "December / January", desc: "Annual classical music festival attracting global artists." },
  ];

  const reach = [
    { mode: "By Air", desc: "Chennai International Airport is a major hub connecting India and the world." },
    { mode: "By Train", desc: "Chennai Central and Chennai Egmore connect to all major Indian cities." },
    { mode: "By Road", desc: "Well-connected through highways and city transport options." },
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

      <style>{`/* Same style as Madurai page */`}</style>
      <div className="district-hero">
        <img src={chennai} alt="Chennai" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Capital City & Cultural Hub</p>
        </div>
      </div>

      <section><h2>About {district}</h2><p style={{ textAlign: "justify" }}>{about}</p></section>
      <section><h2>Top Attractions</h2>{attractions.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Famous Cuisines</h2>{cuisines.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Resorts & Accommodation</h2>{resorts.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Festivals</h2>{festivals.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><small>{item.month}</small><p>{item.desc}</p></div>))}</section>
      <section><h2>How to Reach {district}</h2>{reach.map((item,i)=>(<div className="info-list" key={i}><h3>{item.mode}</h3><p>{item.desc}</p></div>))}</section>
    </div>
  );
};

export default DistrictPage;
