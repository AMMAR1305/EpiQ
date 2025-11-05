import { useState } from "react";
import str from './assets/str.jpg'
import cart from './assets/cart.webp'
import rad from './assets/rad.webp'
import mad from './assets/mad.jpg'
import grt from './assets/grt.webp'
import kan from './assets/kan.jpeg'
function Resorts() {
  const [selectedResort, setSelectedResort] = useState(null);

  const resorts = [
    {
      name: "Sterling Ooty Fern Hill",
      location: "Ooty",
      desc: "A scenic hill resort with luxury cottages, spa, and breathtaking views of the Nilgiris.",
      rating: "4.8 / 5",
      price: "₹9,500 / night",
      amenities: "Spa • Mountain View • Wi-Fi • Restaurant • Bonfire • Kids Play Area",
      image: str,
    },
    {
      name: "The Carlton",
      location: "Kodaikanal",
      desc: "Lakeside resort offering fine dining, spa, and serene boat rides along Kodai Lake.",
      rating: "4.7 / 5",
      price: "₹10,200 / night",
      amenities: "Lake View • Spa • Gym • Indoor Games • Candlelight Dinner",
      image: cart,
    },
    {
      name: "Radisson Blu Resort Temple Bay",
      location: "Mahabalipuram",
      desc: "A luxurious beachfront property with infinity pools, spa, and ancient temple ambience.",
      rating: "4.9 / 5",
      price: "₹13,000 / night",
      amenities: "Beachfront • Infinity Pool • Spa • Bar • Private Villas • Breakfast Buffet",
      image: rad,
    },
    {
      name: "Heritance Madurai",
      location: "Madurai",
      desc: "An elegant resort inspired by temple architecture, offering peace and cultural charm.",
      rating: "4.8 / 5",
      price: "₹8,800 / night",
      amenities: "Pool • Temple Architecture • Cultural Shows • Wi-Fi • Restaurant",
      image: mad,
    },
    {
      name: "Great Trails Yercaud by GRT Hotels",
      location: "Yercaud",
      desc: "A nature resort with valley views, adventure activities, and eco-friendly stay.",
      rating: "4.6 / 5",
      price: "₹7,200 / night",
      amenities: "Valley View • Trekking • Bonfire • Wi-Fi • Restaurant",
      image: grt,
    },
    {
      name: "Anantya Resort",
      location: "Kanyakumari",
      desc: "A tranquil lake-view resort surrounded by plantations, offering Ayurveda therapies.",
      rating: "4.7 / 5",
      price: "₹9,000 / night",
      amenities: "Ayurveda Spa • Lake View • Infinity Pool • Restaurant • Yoga Deck",
      image: kan,
    },
  ];

  return (
    <div className="resorts-container">
      <style>{`
        .resorts-container {
          padding: 3rem 1.5rem;
          background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
          font-family: 'Poppins', sans-serif;
        }
        .resorts-title {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 2.5rem;
        }
        .resorts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .resorts-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .resort-card {
          background: #fff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .resort-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .resort-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .resort-card:hover img {
          transform: scale(1.05);
        }
        .resort-card-content {
          padding: 1.25rem;
          text-align: center;
        }
        .resort-card h3 {
          font-size: 1.4rem;
          color: #047857;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        .resort-card small {
          color: #059669;
          font-weight: 600;
        }
        .resort-card p {
          margin-top: 0.75rem;
          color: #374151;
          font-size: 1rem;
          line-height: 1.5;
        }
        .resort-card button {
          margin-top: 1rem;
          background-color: #10b981;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .resort-card button:hover {
          background-color: #059669;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          animation: fadeIn 0.3s ease-in-out;
          text-align: left;
        }
        .modal img {
          width: 100%;
          border-radius: 0.75rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1rem;
        }
        .modal h3 {
          font-size: 1.8rem;
          color: #047857;
          margin-bottom: 0.5rem;
        }
        .modal p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.6;
          margin: 0.4rem 0;
        }
        .modal strong {
          color: #065f46;
        }
        .modal button {
          margin-top: 1.25rem;
          background-color: #059669;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .modal button:hover {
          background-color: #047857;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="resorts-title">Top Resorts in Tamil Nadu</h2>

      <div className="resorts-grid">
        {resorts.map((resort, i) => (
          <div key={i} className="resort-card" onClick={() => setSelectedResort(resort)}>
            <img src={resort.image} alt={resort.name} />
            <div className="resort-card-content">
              <h3>{resort.name}</h3>
              <small>{resort.location}</small>
              <p>{resort.desc}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {selectedResort && (
        <div className="modal-overlay" onClick={() => setSelectedResort(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedResort.image} alt={selectedResort.name} />
            <h3>{selectedResort.name}</h3>
            <p><strong>Location:</strong> {selectedResort.location}</p>
            <p><strong>Description:</strong> {selectedResort.desc}</p>
            <p><strong>Amenities:</strong> {selectedResort.amenities}</p>
            <p><strong>Rating:</strong> ⭐ {selectedResort.rating}</p>
            <p><strong>Price:</strong> {selectedResort.price}</p>
            <button onClick={() => alert("Booking feature coming soon!")}>Book Now</button>
            <button onClick={() => setSelectedResort(null)} style={{ marginLeft: "1rem", background: "#dc2626" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resorts;
