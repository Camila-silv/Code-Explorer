import { useRef } from "react";
import {IoIosArrowForward, IoIosArrowBack} from "../index";
import PropTypes from "prop-types";

export default function Carousel({ setOpenModal, setChosenPhoto, slides }) {
  const carousel = useRef(null);

  const scrollToNext = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const scrollToBack = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleModal = (slide) => {
    setOpenModal(true);
    setChosenPhoto(slide);
  };
  return (
    <section className="gallery-section">
      <IoIosArrowBack className="arrow arrow--back" onClick={scrollToBack} />

      <div className="carousel" ref={carousel}>
        {slides.map((slide) => {
          return (
            <div key={slide.img} className="swiper-slide">
              <img
                src={slide.img}
                alt={slide.alt}
                onClick={() => handleModal(slide)}
              />
            </div>
          );
        })}
      </div>
      <IoIosArrowForward className="arrow arrow--next" onClick={scrollToNext} />
    </section>
  );
}

Carousel.propTypes = {
  setOpenModal: PropTypes.bool,
  setChosenPhoto: PropTypes.object,
  slides: PropTypes.array,
};
