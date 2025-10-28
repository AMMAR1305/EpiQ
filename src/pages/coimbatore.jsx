import React from "react";
import coimbatore from "../assets/coimbatore.jpg";

const CoimbatorePage = () => {
  const district = "Coimbatore";

  const about = `Coimbatore, known as the Manchester of South India, is an industrial and educational hub in Tamil Nadu. It is famous for textiles, IT industries, and nearby hill stations like Valparai.`;

  const attractions = [
    { name: "Marudamalai Temple", desc: "Hilltop temple dedicated to Lord Murugan with panoramic views." },
    { name: "VOC Park", desc: "City park with gardens, play areas, and recreational activities." },
    { name: "Siruvani Waterfalls", desc: "Picturesque waterfalls and reservoirs offering scenic beauty." },
  ];

  const cuisines = [
    { name: "Coimbatore Biryani", desc: "Spiced rice dish popular in local eateries." },
    { name: "Filter Coffee", desc: "Strong South Indian coffee with rich aroma." },
  ];

  const resorts = [
    { name: "Heritage Hotel Coimbatore", desc: "Luxury accommodation blending comfort and style." },
        { name: "City Stays", desc: "Comfortable and convenient hotels in the heart of Coimbatore." },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Harvest festival celebrated with traditional fervor across Tamil Nadu." },
  ];

  const reach = [
    { mode: "By Air", desc: "Coimbatore International Airport connects to major Indian cities and select international destinations." },
    { mode: "By Train", desc: "Coimbatore Junction connects the city to major cities in Tamil Nadu and India." },
    { mode: "By Road", desc: "Well-connected via NH544 and NH181 with buses and taxis." },
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
        <img src={coimbatore} alt="Coimbatore City" />
        <div className="hero-text"><h1>{district}</h1><p>The Manchester of South India</p></div>
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

export default CoimbatorePage;

