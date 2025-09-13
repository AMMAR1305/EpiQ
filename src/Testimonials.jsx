import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const reviews = [
    { name: "Anita", feedback: "Amazing tour! Loved the temples and beaches." },
    { name: "Ravi", feedback: "Great experience in Kodaikanal and Ooty!" },
    { name: "Priya", feedback: "Tamil Nadu culture and food are unforgettable!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="testimonials-section">
      <style>{`
        .testimonials-section {
          padding: 3rem 1.5rem;
          background-color: #f3f4f6;
          font-family: 'Arial', sans-serif;
        }
        .testimonials-section h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 2rem;
        }
        .slick-slide {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .testimonial-card {
          background: white;
          max-width: 600px;
          margin: auto;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
        }
        .testimonial-card p {
          font-style: italic;
          font-size: 1.125rem;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        .testimonial-card h3 {
          font-weight: 600;
          font-size: 1.25rem;
          color: #111827;
        }
      `}</style>

      <h2>Testimonials</h2>

      <Slider {...settings}>
        {reviews.map((review, i) => (
          <div key={i}>
            <div className="testimonial-card">
              <p>"{review.feedback}"</p>
              <h3>- {review.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
