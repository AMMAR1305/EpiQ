import { useState } from "react";

// Existing imports
import pons from "./assets/pons.jpeg";
import thaipusam from "./assets/thaipusam.jpeg";
import mahamam from "./assets/mahamam.jpg";
import natyanjali from "./assets/natyanjali.jpeg";
import eas from "./assets/eas.jpeg";
import deepam from "./assets/deepam.jpeg";
import ramzan from "./assets/ramzan.webp";
import bakrid from "./assets/bakrid.webp";
import christmas from "./assets/christmas.jpeg";

function Festivals() {
  const [selectedFestival, setSelectedFestival] = useState(null);

  const festivals = [
    {
      name: "Pongal",
      month: "January",
      desc: "Harvest festival celebrated with sweet pongal, colorful kolams, and bullock cart races.",
      img: pons,
      details:
        "Pongal marks the end of the winter solstice and the start of the sun’s northward journey. People thank the Sun God and cattle for a bountiful harvest by cooking a sweet dish called ‘Pongal’.",
    },
     {
      name: "Ramzan (Eid-ul-Fitr)",
      month: "April / May (varies with lunar calendar)",
      desc: "Festival marking the end of Ramadan with prayers, feasts, and charity.",
      img: ramzan,
      details:
        "Ramzan or Eid-ul-Fitr is celebrated after a month of fasting during Ramadan. People gather for prayers, prepare special dishes like biryani and sheer khurma, and share gifts and alms with the needy.",
    },
     {
      name: "Christmas",
      month: "December 25",
      desc: "Festival celebrating the birth of Jesus Christ with joy, music, and decorations.",
      img: christmas,
      details:
        "Christmas is celebrated across Tamil Nadu with carol singing, church services, and illuminated decorations. Special cakes, gifts, and community feasts mark the day with festive cheer.",
    },
    {
      name: "Thaipusam",
      month: "January / February",
      desc: "Devotional festival honoring Lord Murugan, observed with kavadi, piercing rituals, and processions.",
      img: thaipusam,
      details:
        "Thaipusam is celebrated in temples dedicated to Lord Murugan. Devotees carry kavadis (decorated offerings) and pierce their bodies as acts of devotion and penance.",
    },
    {
      name: "Mahamaham",
      month: "Once every 12 years",
      desc: "Grand festival at Kumbakonam where lakhs take a holy dip in the sacred Mahamaham tank.",
      img: mahamam,
      details:
        "Mahamaham is a massive festival similar to the Kumbh Mela of North India. It occurs every 12 years when devotees bathe in the Mahamaham tank to cleanse their sins.",
    },
     {
      name: "Bakrid (Eid-al-Adha)",
      month: "June / July (varies with lunar calendar)",
      desc: "Festival of sacrifice symbolizing faith, devotion, and charity.",
      img: bakrid,
      details:
        "Bakrid commemorates Prophet Ibrahim’s willingness to sacrifice his son as an act of obedience to God. Families offer prayers and share sacrificial meals with relatives and the poor.",
    },
    {
      name: "Natyanjali Festival",
      month: "February / March",
      desc: "Dance festival at Chidambaram temple dedicated to Lord Nataraja, showcasing Bharatanatyam performances.",
      img: natyanjali,
      details:
        "Dancers from all over India perform in the temple complex, offering their art as devotion to Lord Nataraja — the cosmic dancer.",
    },
   {
  name: "Easter Festival",
  month: "March / April",
  desc: "A Christian festival celebrating the resurrection of Jesus Christ.",
  img: eas,
  details:
    "Easter is celebrated with great joy across Tamil Nadu. Churches are beautifully decorated, special prayers and midnight masses are held, and people share festive meals with family and friends.",
},

    {
      name: "Karthigai Deepam",
      month: "November / December",
      desc: "Festival of lights where thousands of lamps illuminate homes and temples across Tamil Nadu.",
      img: deepam,
      details:
        "The highlight occurs at Thiruvannamalai when a huge flame is lit atop the Annamalai hill, symbolizing Lord Shiva’s infinite form as light.",
    },
   
   
   
  ];

  return (
    <div className="festivals-container">
      <style>{`
        .festivals-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Poppins', sans-serif;
        }

        .festivals-container h2 {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          color: #9a3412;
          margin-bottom: 2.5rem;
          letter-spacing: 1px;
        }

        .festivals-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .festivals-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .festival-card {
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .festival-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .festival-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .festival-content {
          padding: 1.5rem;
          text-align: center;
        }

        .festival-content h3 {
          font-size: 1.5rem;
          color: #b45309;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .festival-content small {
          display: block;
          color: #ea580c;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .festival-content p {
          color: #374151;
          line-height: 1.6;
          font-size: 1rem;
        }

        .festival-content button {
          margin-top: 1rem;
          padding: 0.6rem 1.3rem;
          background-color: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .festival-content button:hover {
          background-color: #9a3412;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          width: 90%;
          text-align: center;
          animation: fadeIn 0.4s ease-in-out;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }

        .modal img {
          width: 100%;
          border-radius: 0.8rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .modal h3 {
          color: #b45309;
          margin-bottom: 0.5rem;
        }

        .modal p {
          color: #444;
          line-height: 1.6;
        }

        .modal button {
          margin-top: 1rem;
          background-color: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .modal button:hover {
          background-color: #dc2626;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2>Festivals of Tamil Nadu</h2>

      <div className="festivals-grid">
        {festivals.map((festival, i) => (
          <div key={i} className="festival-card">
            <img src={festival.img} alt={festival.name} />
            <div className="festival-content">
              <h3>{festival.name}</h3>
              <small>{festival.month}</small>
              <p>{festival.desc}</p>
              <button onClick={() => setSelectedFestival(festival)}>Know More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFestival && (
        <div className="modal-overlay" onClick={() => setSelectedFestival(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedFestival.img} alt={selectedFestival.name} />
            <h3>{selectedFestival.name}</h3>
            <p><strong>Month:</strong> {selectedFestival.month}</p>
            <p>{selectedFestival.details}</p>
            <button onClick={() => setSelectedFestival(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Festivals;
