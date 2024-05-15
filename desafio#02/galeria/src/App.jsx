import { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Header, Footer, Modal } from "./components";

export default function App() {
  // "./assets/img/photo01.jpg",
  const listaTeste = [
    {
      img: "./assets/img/photo01.jpg",
      alt: "Visualização da porta de entrada da loja Azaran",
    },
    {
      img: "./assets/img/photo02.jpg",
      alt: "Imagem de dois livros, um da COompanyLogo e o outro do Michael Jonns",
    },
    {
      img: "./assets/img/photo03.jpg",
      alt: "Um emblema com o simbolo de leão",
    },
    {
      img: "./assets/img/photo04.jpg",
      alt: "Ilustração de dois cartões na foto",
    },
    {
      img: "./assets/img/photo05.jpg",
      alt: "Ilustração de dois bilhetes na foto",
    },
    {
      img: "./assets/img/photo06.jpg",
      alt: "Ilustração de um lapis e um papel da Mockup",
    },
  ];
  const carrossel = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState({});

  const scrollToNext = () => {
    console.log(carrossel.current);
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  const scrollToBack = () => {
    console.log(carrossel.current);
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const handleModal = (slide) => {
    setOpenModal(true);
    setChosenPhoto(slide);
  };

  return (
    <>
      <Header />

      <main className="main-content">
        <section className="gallery-section">
          <IoIosArrowBack className="arrow arrow--back" onClick={scrollToBack} />

          <div className="carousel" ref={carrossel}>
            {listaTeste.map((slide) => {
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
          <IoIosArrowForward
            className="arrow arrow--next"
            onClick={scrollToNext}
          />
        </section>
      </main>

      <Footer />

      {openModal ? (
        <Modal handleOpenModal={setOpenModal} chosenPhoto={chosenPhoto} />
      ) : null}
    </>
  );
}
