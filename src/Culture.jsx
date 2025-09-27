import pongal from './assets/pongal.jpeg';
import art from './assets/art.jpeg';
import temple from './assets/temple.jpeg';
import cus from './assets/cus.webp';
import dance from './assets/dance.jpg';
import lang from './assets/lang.webp';

function Culture() {
  return (
    <div>
      <style>{`
        .culture-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        .culture-title {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #2c3e50;
        }
        .culture-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
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
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        .culture-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
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
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #2c3e50;
        }
        .culture-card-content p {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.6;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="culture-container">
        <h2 className="culture-title">Culture & Heritage of Tamil Nadu</h2>

        <div className="culture-grid">
          <div className="culture-card">
            <img src={pongal} alt="Festivals" />
            <div className="culture-card-content">
              <h3>Festivals</h3>
              <p>
                Pongal, Tamil New Year, Karthigai Deepam, and Jallikattu highlight the vibrant celebrations of Tamil Nadu, where ancient traditions and rituals thrive in every corner of the state.
              </p>
            </div>
          </div>

          <div className="culture-card">
            <img src={art} alt="Arts & Crafts" />
            <div className="culture-card-content">
              <h3>Arts & Crafts</h3>
              <p>
                Bharatanatyam dance performances, Tanjore paintings, intricate handloom sarees, and exquisite metal sculptures are a testament to the rich artistic heritage of Tamil Nadu.
              </p>
            </div>
          </div>

          <div className="culture-card">
            <img src={temple} alt="Temples" />
            <div className="culture-card-content">
              <h3>Temples</h3>
              <p>
                The architectural marvels such as Meenakshi Amman Temple, Brihadeeswara Temple, and Shore Temple showcase the grandeur of Dravidian architecture and religious devotion.
              </p>
            </div>
          </div>

          <div className="culture-card">
            <img src={cus} alt="Cuisine" />
            <div className="culture-card-content">
              <h3>Cuisine</h3>
              <p>
                From the spicy Chettinad curries to soft Idli and crispy Dosa, Tamil Nadu cuisine is a flavorful journey of regional dishes paired with traditional filter coffee.
              </p>
            </div>
          </div>

          <div className="culture-card">
            <img src={dance} alt="Music & Dance" />
            <div className="culture-card-content">
              <h3>Music & Dance</h3>
              <p>
                Classical Carnatic music and Bharatanatyam dance are pillars of Tamil culture, preserved and passed down through generations as vibrant expressions of art.
              </p>
            </div>
          </div>

          <div className="culture-card">
            <img src={lang} alt="Language & Literature" />
            <div className="culture-card-content">
              <h3>Language & Literature</h3>
              <p>
                Tamil is one of the oldest living languages with a rich literary tradition, including ancient epics like Thirukkural, Sangam literature, and devotional poetry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;
