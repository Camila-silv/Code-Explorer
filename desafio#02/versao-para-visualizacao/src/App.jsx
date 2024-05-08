import { useState } from "react";

import { Carrossel, Header, Footer, Modal } from "./components";

export default function App() {
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

  const [openModal, setOpenModal] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState({});

  return (
    <>
      <Header />

      <main className="main-content">
        <section className="gallery-section">
          <Carrossel
            slides={listaTeste}
            handleOpenModal={setOpenModal}
            handleChosenPhoto={setChosenPhoto}
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
