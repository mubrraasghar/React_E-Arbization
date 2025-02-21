import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../styles/TrustedBySlider.css";

const logos = [
  "/assets/Trusted_logos/ACTION.png",
  "/assets/Trusted_logos/amazon.png",
  "/assets/Trusted_logos/BAAZ.png",
  "/assets/Trusted_logos/BBC.png",
  "/assets/Trusted_logos/BME.png",
  "/assets/Trusted_logos/building.png",
  "/assets/Trusted_logos/carrefour.png",
  "/assets/Trusted_logos/dubai.png",
  "/assets/Trusted_logos/etisalat.png",
  "/assets/Trusted_logos/european.png",
  "/assets/Trusted_logos/ISACA.png",
  "/assets/Trusted_logos/iyuno.png",
  "/assets/Trusted_logos/jume.png",
  "/assets/Trusted_logos/kk.png",
  "/assets/Trusted_logos/macdnolds.png",
  "/assets/Trusted_logos/petrol.png",
  "/assets/Trusted_logos/qatar.png",
];

const TrustedBySlider = () => {
  return (
    <section className="trusted-section">
      <h2 className="trusted-title">Trusted by</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 4 },
          480: { slidesPerView: 2 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="Trusted brand" className="brand-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrustedBySlider;
