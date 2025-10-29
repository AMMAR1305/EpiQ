import React, { useState } from "react";
import pongal from "./assets/pongal.jpeg";
import art from "./assets/art.jpeg";
import temple from "./assets/temple.jpeg";
import cus from "./assets/cus.webp";
import dance from "./assets/dance.jpg";
import lang from "./assets/lang.webp";

function Culture() {
  const [selected, setSelected] = useState(null);

  const cultureItems = [
    {
      title: "Festivals",
      img: pongal,
      desc:
        "Pongal, Tamil New Year, Karthigai Deepam, and Jallikattu highlight the vibrant celebrations of Tamil Nadu, where ancient traditions and rituals thrive in every corner of the state.",
      details:
        "Festivals in Tamil Nadu are deeply rooted in agricultural and religious practices. Pongal, the harvest festival, marks gratitude to nature, while Karthigai Deepam illuminates homes and temples across the state. Each festival represents harmony, devotion, and the essence of Tamil heritage.",
    },
    {
      title: "Arts & Crafts",
      img: art,
      desc:
        "Bharatanatyam, Tanjore paintings, intricate handloom sarees, and exquisite metal sculptures showcase Tamil Nadu's artistic brilliance.",
      details:
        "Tamil Nadu’s art forms blend spirituality and craftsmanship. The state is renowned for bronze casting, handwoven Kanchipuram silks, and mural paintings. Bharatanatyam remains one of the oldest and most elegant dance forms symbolizing grace and discipline.",
    },
    {
      title: "Temples",
      img: temple,
      desc:
        "The architectural marvels such as Meenakshi Amman Temple and Brihadeeswara Temple showcase Dravidian grandeur.",
      details:
        "Temples in Tamil Nadu reflect the pinnacle of Dravidian architecture. Towering gopurams, intricate sculptures, and spiritual stories adorn structures like Rameswaram, Chidambaram, and Kanchipuram temples, attracting devotees and historians worldwide.",
    },
    {
      title: "Cuisine",
      img: cus,
      desc:
        "From spicy Chettinad curries to soft Idlis and crispy Dosas, Tamil Nadu cuisine is a flavorful journey.",
      details:
        "Tamil cuisine is a delightful mix of flavors — tangy sambar, crispy vadas, aromatic biryanis, and coconut-rich gravies. Each region offers unique dishes, and traditional filter coffee completes every meal with warmth.",
    },
    {
      title: "Music & Dance",
      img: dance,
      desc:
        "Carnatic music and Bharatanatyam dance are vibrant expressions of Tamil culture.",
      details:
        "Music and dance have always been integral to Tamil heritage. Carnatic ragas echo divine devotion, while Bharatanatyam narrates mythological tales through rhythmic grace and intricate gestures.",
    },
    {
      title: "Language & Literature",
      img: lang,
      desc:
        "Tamil, one of the oldest living languages, has a rich literary tradition from Sangam poetry to Thirukkural.",
      details:
        "Tamil literature spans centuries of poetic excellence. Works like Silappatikaram, Thirukkural, and Sangam poems emphasize moral values, love, and heroism, shaping Tamil identity across generations.",
    },
  ];

  return (
    <div className="culture-container">
      <style>{`
        .culture-container {
          padding: 3rem 1.5rem;
          background-color: #fffaf0;
          font-family: 'Poppins', sans-serif;
          color: #2c3e50;
        }
        .culture-title {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #6b2f00;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .culture-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .culture-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .culture-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .culture-card {
          background-color: #fff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        .culture-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .culture-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .culture-card:hover img {
          transform: scale(1.05);
        }
        .culture-card-content {
          padding: 1.5rem;
        }
        .culture-card-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #7c2d12;
          margin-bottom: 0.5rem;
        }
        .culture-card-content p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
        }
        .explore-btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.4rem;
          background-color: #b45309;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .explore-btn:hover {
          background-color: #92400e;
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.4s ease;
        }
        .modal-content {
          background: #fff;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          text-align: center;
          position: relative;
          animation: slideUp 0.5s ease;
        }
        .modal-content h3 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #7c2d12;
        }
        .modal-content p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
        }
        .close-btn {
          margin-top: 1.2rem;
          background-color: #b45309;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .close-btn:hover {
          background-color: #92400e;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <h2 className="culture-title">Culture & Heritage of Tamil Nadu</h2>

      <div className="culture-grid">
        {cultureItems.map((item, index) => (
          <div key={index} className="culture-card">
            <img src={item.img} alt={item.title} />
            <div className="culture-card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="explore-btn" onClick={() => setSelected(item)}>
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selected.title}</h3>
            <p>{selected.details}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Culture;
