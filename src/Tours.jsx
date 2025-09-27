import { useState } from "react";
import temple from './assets/temple.jpeg';
import hill from './assets/hill.jpg';
import beach from './assets/beach.jpg';
import safari from './assets/safari.jpg';
import spr from './assets/spr.webp';
import ss from './assets/ss.jpeg';

function Tours() {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    { 
      title: "Temple Trail", 
      days: "3 Days", 
      price: "₹4,999", 
      desc: "Explore Madurai, Rameswaram, and Kanchipuram temples, experiencing rich heritage and spirituality.",
      img: temple,
      details: "Day 1: Madurai temples • Day 2: Rameswaram visit • Day 3: Kanchipuram temple tour."
    },
    { 
      title: "Hill Station Escape", 
      days: "4 Days", 
      price: "₹7,499", 
      desc: "Relax in Ooty and Kodaikanal surrounded by lush green landscapes, lakes, and waterfalls.",
      img: hill,
      details: "Day 1: Arrival Ooty • Day 2: Sightseeing • Day 3: Kodaikanal trip • Day 4: Return."
    },
    { 
      title: "Beach & Heritage", 
      days: "2 Days", 
      price: "₹3,999", 
      desc: "Enjoy Mahabalipuram rock temples and the beauty of Marina Beach, perfect for a short getaway.",
      img: beach,
      details: "Day 1: Mahabalipuram tour • Day 2: Marina Beach visit."
    },
    { 
      title: "Wildlife Safari", 
      days: "3 Days", 
      price: "₹5,499", 
      desc: "Visit Mudumalai and Anamalai wildlife sanctuaries for a thrilling experience with nature.",
      img: safari,
      details: "Day 1: Mudumalai safari • Day 2: Anamalai wildlife trek • Day 3: Return journey."
    },
    { 
      title: "Spiritual Sojourn", 
      days: "5 Days", 
      price: "₹8,999", 
      desc: "A spiritual journey covering Chidambaram, Thiruvannamalai, and Srirangam temples.",
      img: spr,
      details: "Day 1: Chidambaram • Day 2: Thiruvannamalai • Day 3-5: Srirangam spiritual tour."
    },
    { 
      title: "Cultural Discovery", 
      days: "3 Days", 
      price: "₹6,499", 
      desc: "Immerse in Tamil culture visiting local villages, arts, traditional cuisine, and festivals.",
      img: ss,
      details: "Day 1: Village tour • Day 2: Art & cuisine experience • Day 3: Festival celebration."
    },
  ];

  return (
    <div className="tours-container">
      <style>{`
        .tours-container {
          padding: 3rem 1.5rem;
          background-color: #f9fafb;
          font-family: 'Arial', sans-serif;
        }
        .tours-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 3rem;
        }
        .tours-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .tours-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .tour-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .tour-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .tour-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .tour-card .card-content {
          padding: 1.5rem;
        }
        .tour-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .tour-card .tour-info {
          font-size: 1rem;
          color: #4b5563;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .tour-card p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
        }
        .tour-card button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.5rem;
          background-color: #047857;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .tour-card button:hover {
          background-color: #065f46;
        }
        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 500px;
          width: 90%;
          text-align: center;
        }
        .modal-content h2 {
          margin-bottom: 1rem;
        }
        .modal-content p {
          margin-bottom: 1rem;
          color: #374151;
        }
        .close-btn {
          background: #dc2626;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
        }
        .close-btn:hover {
          background: #b91c1c;
        }
          /* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);  /* darker overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 90%;
  text-align: left;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  animation: slideUp 0.4s ease;
}

.modal-content h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.modal-content p {
  font-size: 1rem;
  color: #374151;
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.modal-content p b {
  color: #047857; /* highlight important labels */
}

.close-btn {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: #b91c1c;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

      `}</style>

      <h2>Exciting Tour Packages</h2>

      <div className="tours-grid">
        {tours.map((tour, i) => (
          <div key={i} className="tour-card">
            <img src={tour.img} alt={tour.title} />
            <div className="card-content">
              <h3>{tour.title}</h3>
              <div className="tour-info">{tour.days} | {tour.price}</div>
              <p>{tour.desc}</p>
              <button onClick={() => setSelectedTour(tour)}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTour && (
        <div className="modal" onClick={() => setSelectedTour(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTour.title}</h2>
            <p><b>Duration:</b> {selectedTour.days}</p>
            <p><b>Price:</b> {selectedTour.price}</p>
            <p>{selectedTour.details}</p>
            <button className="close-btn" onClick={() => setSelectedTour(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tours;
