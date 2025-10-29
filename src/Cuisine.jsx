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
      recipe: "Try Chettinad chicken curry cooked with freshly ground spices. Best enjoyed with steamed rice or parotta.",
      ingredients: "Chicken, black pepper, dry red chili, curry leaves, ginger-garlic, coconut.",
      rating: "4.8 / 5",
      location: "Karaikudi, Tamil Nadu"
    },
    { 
      title: "Madurai Jigarthanda", 
      origin: "Madurai", 
      desc: "A cool and creamy drink made with milk, ice cream, and sarsaparilla syrup.", 
      img: jigarthanda,
      recipe: "Served chilled with thickened milk, nannari syrup, and ice cream on top.",
      ingredients: "Milk, badam pisin, nannari syrup, sugar, vanilla ice cream.",
      rating: "4.6 / 5",
      location: "Madurai, Tamil Nadu"
    },
    { 
      title: "Kanchipuram Idli", 
      origin: "Kanchipuram", 
      desc: "A spiced version of idli made with cumin, pepper, and ginger.", 
      img: kanchipuramIdli,
      recipe: "Made with rice, urad dal, cumin, pepper, and ginger, steamed in banana leaves.",
      ingredients: "Rice, urad dal, cumin, pepper, ginger, ghee, curry leaves.",
      rating: "4.7 / 5",
      location: "Kanchipuram, Tamil Nadu"
    },
    { 
      title: "Dindigul Biryani", 
      origin: "Dindigul", 
      desc: "Unique biryani with seeraga samba rice and a distinct spicy flavor.", 
      img: dindigul,
      recipe: "Cooked with seeraga samba rice, flavorful spices, and tender mutton or chicken.",
      ingredients: "Seeraga samba rice, mutton, yogurt, cloves, cinnamon, mint.",
      rating: "4.9 / 5",
      location: "Dindigul, Tamil Nadu"
    },
    { 
      title: "Parotta & Salna", 
      origin: "Tamil Nadu Street Food", 
      desc: "Layered parottas served with a spicy curry, popular in roadside stalls.", 
      img: parotta,
      recipe: "Flaky parottas made by folding and frying dough, served with spicy onion-tomato gravy.",
      ingredients: "Maida flour, oil, onion, tomato, garlic, chili powder.",
      rating: "4.5 / 5",
      location: "Madurai & Chennai Streets"
    },
    { 
      title: "Filter Coffee", 
      origin: "Tamil Nadu", 
      desc: "Authentic South Indian filter coffee with rich aroma and frothy top.", 
      img: coffee,
      recipe: "Made with freshly brewed filter coffee decoction and hot frothy milk.",
      ingredients: "Coffee decoction, boiled milk, sugar.",
      rating: "4.8 / 5",
      location: "Across Tamil Nadu"
    },
  ];

  return (
    <div className="cuisine-container">
      <style>{`
        .cuisine-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Poppins', sans-serif;
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
          height: 200px;
          object-fit: cover;
        }
        .cuisine-card .card-content {
          padding: 1.5rem;
          text-align: center;
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

        /* Modal Overlay */
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

        /* Modal Box */
        .modal {
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          width: 90%;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
          animation: fadeIn 0.3s ease-in-out;
        }

        .modal img {
          width: 100%;
          border-radius: 0.75rem;
          height: 250px;
          object-fit: cover;
          margin-bottom: 1.2rem;
        }

        .modal h3 {
          font-size: 1.8rem;
          color: #b45309;
          margin-bottom: 0.75rem;
        }

        .modal-content {
          text-align: left;
          margin-top: 1rem;
        }

        .modal-content p {
          font-size: 1rem;
          color: #444;
          margin: 0.4rem 0;
          line-height: 1.6;
        }

        .modal-content strong {
          color: #9a3412;
        }

        .modal button {
          margin-top: 1.5rem;
          padding: 0.7rem 1.5rem;
          background: #b45309;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .modal button:hover {
          background: #92400e;
        }

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
            <img src={selectedFood.img} alt={selectedFood.title} />
            <h3>{selectedFood.title}</h3>
            <div className="modal-content">
              <p><strong>Origin:</strong> {selectedFood.origin}</p>
              <p><strong>Famous Location:</strong> {selectedFood.location}</p>
              <p><strong>Ingredients:</strong> {selectedFood.ingredients}</p>
              <p><strong>Recipe:</strong> {selectedFood.recipe}</p>
              <p><strong>Rating:</strong> ⭐ {selectedFood.rating}</p>
            </div>
            <button onClick={() => setSelectedFood(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cuisine;
