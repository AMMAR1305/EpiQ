import React from "react";
import vellore from "../assets/vellore.jpg";

const VellorePage = () => {
  const district = "Vellore";

  const about = `Vellore is a historic city in Tamil Nadu, known for its medical institutions, leather industry, and heritage sites such as the Vellore Fort and Jalakandeswarar Temple.`;

  const attractions = [
    { name: "Vellore Fort", desc: "Historic fort with beautiful ramparts and temples inside." },
    { name: "Jalakandeswarar Temple", desc: "Ancient temple dedicated to Lord Shiva within the fort." },
    { name: "Golden Temple", desc: "A renowned Christian pilgrimage site made of gold-plated structure." },
  ];

  const cuisines = [
    { name: "Vellore Biriyani", desc: "Spiced rice and meat dish popular in the region." },
    { name: "Sweet Pongal", desc: "Traditional sweet dish often served during festivals." },
  ];

  const resorts = [
    { name: "Fort Heritage Hotel", desc: "Blend of heritage ambiance with modern comfort." },
    { name: "Hotel Residency", desc: "Comfortable accommodation in the city center." },
  ];

  const festivals = [
    { name: "Panguni Uthiram", month: "March / April", desc: "Temple festival with grand processions." },
  ];

  const reach = [
    { mode: "By Air", desc: "Nearest airport is Chennai International Airport, 140 km away." },
    { mode: "By Train", desc: "Vellore Cantonment Railway Station connects to major cities." },
    { mode: "By Road", desc: "Well-connected via NH48 and NH75, with buses and taxis available." },
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
        <img src={vellore} alt="Vellore City" />
        <div className="hero-text"><h1>{district}</h1><p>The Heritage City of Tamil Nadu</p></div>
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

export default VellorePage;
