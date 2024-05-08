import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import PropTypes from "prop-types";

const Carrossel = ({ slides, handleOpenModal, handleChosenPhoto }) => {
  const openModal = (slide) => {
    handleOpenModal(true);
    handleChosenPhoto(slide);
  };

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      className="swiper"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={slide.img}
            className="swiper-slide"
            onClick={() => openModal(slide)}
          >
            <img src={slide.img} alt={slide.alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carrossel;

Carrossel.propTypes = {
  slides: PropTypes.array,
  handleOpenModal: PropTypes.func,
  handleChosenPhoto: PropTypes.func,
};
