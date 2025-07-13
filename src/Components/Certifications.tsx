import Slider from "react-slick";
import resumeData from "../resumeData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="text-center">Certifications</h2>
        <Slider {...settings}>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <img
                src={`images/certifications/${cert.image}`}
                alt={cert.title}
                className="certification-image"
              />
              <p className="text-center">{cert.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certifications;