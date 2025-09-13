import img from './assets/img.webp';
function About() {
  return (
    <div className="about-container">
      <style>{`
        .about-container {
          padding: 4rem 2rem;
          max-width: 1000px;
          margin: 2rem auto;
          font-family: 'Poppins', sans-serif;
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
          line-height: 1.8;
        }
        .about-container h2 {
          text-align: center;
          font-size: 3rem;
          font-weight: 900;
          color: #0056b3;
          margin-bottom: 2rem;
        }
        .about-container img {
          display: block;
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          border-radius: 1rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .about-container p {
          font-size: 1.2rem;
          color: #374151;
          margin-bottom: 1.8rem;
          text-align: justify;
        }
        .about-container strong {
          color: #0056b3;
        }
      `}</style>

      <h2>About Tamil Nadu Tourism</h2>

      <img src={img} alt="Tamil Nadu Overview" />

      <p>
        <strong>Tamil Nadu Tourism</strong> is dedicated to celebrating the timeless beauty, rich traditions, and cultural legacy of one of India’s most vibrant states. 
        From the awe-inspiring temples of <strong>Madurai</strong> and <strong>Thanjavur</strong>, to the misty hill stations of <strong>Ooty</strong> and <strong>Kodaikanal</strong>, 
        and the coastal wonders of <strong>Mahabalipuram</strong> and <strong>Rameswaram</strong>, every corner of Tamil Nadu tells a story that captivates travelers.
      </p>

      <p>
        Our mission is to deliver <strong>authentic, safe, and memorable experiences</strong> for every visitor. We believe in promoting 
        <strong> sustainable tourism</strong>—one that not only showcases the natural and cultural wealth of Tamil Nadu but also empowers local communities and preserves our heritage for generations to come.
      </p>

      <p>
        Whether you’re a history enthusiast, a nature lover, or someone seeking spiritual serenity, 
        Tamil Nadu offers an unforgettable journey of discovery. Let us be your trusted guide in exploring the <strong>Jewel of South India</strong>.
      </p>
    </div>
  );
}

export default About;
