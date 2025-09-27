import { useState } from "react";

import chettinad from './assets/chettinad.jpg';
import jigarthanda from './assets/jigarthanda.jpg';
import kanchipuramIdli from './assets/kanchipuramIdli.jpg';
import dindigul from './assets/dindigul.jpg';
import parotta from './assets/parotta.jpg';
import coffee from './assets/coffee.jpg';

function Cuisine() {
  const [selectedFood, setSelectedFood] = useState(null);

  const cuisines = [
    { 
      title: "Chettinad Cuisine", 
      origin: "Chettinad Region", 
      desc: "Famous for its spicy curries, pepper chicken, and aromatic biryanis.", 
      img: chettinad,
      recipe: "Try Chettinad chicken curry cooked with freshly ground spices. Best enjoyed with steamed rice or parotta."
    },
    { 
      title: "Madurai Jigarthanda", 
      origin: "Madurai", 
      desc: "A cool and creamy drink made with milk, ice cream, and sarsaparilla syrup.", 
      img: jigarthanda,
      recipe: "Served chilled with thickened milk, nannari syrup, and ice cream on top."
    },
    { 
      title: "Kanchipuram Idli", 
      origin: "Kanchipuram", 
      desc: "A spiced version of idli made with cumin, pepper, and ginger.", 
      img: kanchipuramIdli,
      recipe: "Made with rice, urad dal, cumin, pepper, and ginger, steamed in banana leaves."
    },
    { 
      title: "Dindigul Biryani", 
      origin: "Dindigul", 
      desc: "Unique biryani with seeraga samba rice and a distinct spicy flavor.", 
      img: dindigul,
      recipe: "Cooked with seeraga samba rice, flavorful spices, and tender mutton or chicken."
    },
    { 
      title: "Parotta & Salna", 
      origin: "Tamil Nadu Street Food", 
      desc: "Layered parottas served with a spicy curry, popular in roadside stalls.", 
      img: parotta,
      recipe: "Flaky parottas made by folding and frying dough, served with spicy onion-tomato gravy."
    },
    { 
      title: "Filter Coffee", 
      origin: "Tamil Nadu", 
      desc: "Authentic South Indian filter coffee with rich aroma and frothy top.", 
      img: coffee,
      recipe: "Made with freshly brewed filter coffee decoction and hot frothy milk."
    },
  ];

  return (
    <div className="cuisine-container">
      <style>{`
        .cuisine-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Arial', sans-serif;
        }
        .cuisine-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #7c2d12;
          margin-bottom: 3rem;
        }
        .cuisine-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .cuisine-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cuisine-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cuisine-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .cuisine-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .cuisine-card .card-content {
          padding: 1.5rem;
        }
        .cuisine-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #9a3412;
          margin-bottom: 0.5rem;
        }
        .cuisine-card .origin {
          font-size: 1rem;
          color: #ea580c;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .cuisine-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }
        .cuisine-card button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.5rem;
          background-color: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .cuisine-card button:hover {
          background-color: #92400e;
        }

        /* Modal Styles */
        /* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);  /* dim background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Box */
.modal {
  background: #fff;
  padding: 25px 35px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

/* Title */
.modal h3 {
  margin-top: 0;
  font-size: 22px;
  font-weight: 600;
  color: #333;
}

/* Text */
.modal p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
  line-height: 1.5;
}

/* Close Button */
.modal button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #ff5722;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.modal button:hover {
  background: #e64a19;
}

/* Fade Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-15px); }
  to { opacity: 1; transform: translateY(0); }
}

      `}</style>

      <h2>Famous Tamil Nadu Cuisine</h2>

      <div className="cuisine-grid">
        {cuisines.map((food, i) => (
          <div key={i} className="cuisine-card">
            <img src={food.img} alt={food.title} />
            <div className="card-content">
              <h3>{food.title}</h3>
              <div className="origin">{food.origin}</div>
              <p>{food.desc}</p>
              <button onClick={() => setSelectedFood(food)}>Taste Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFood && (
        <div className="modal-overlay" onClick={() => setSelectedFood(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedFood.title}</h3>
            <p><strong>Origin:</strong> {selectedFood.origin}</p>
            <p>{selectedFood.recipe}</p>
            <button onClick={() => setSelectedFood(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cuisine;
