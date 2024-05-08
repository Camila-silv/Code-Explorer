import { Header, Footer } from "./components";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="banner-section">
          <div className="welcome-container">
            <h2 className="welcome-container__title">Olá, mundo!</h2>
            <p className="welcome-container__paragraphy">
              Boas vindas ao meu espaço pessoal! Eu sou Camila Silva, dev
              front-end Júnior. E aqui irei contar um pouco sobre mim!!
            </p>
          </div>
          <div className="banner-photo-container">
            <img
              src="./assets/img/img-camila.jpg"
              alt="Foto da Camila Silva, mulher com cabelos até a altura do ombro, branca, usa uma camisa azul"
              className="banner-photo-container__img"
            />
          </div>
        </section>
        <section className="about-me-section">
          <header className="about-me-section-header">
            <div className="about-me-section-header__container container">
              <h1 className="about-me-section-header__title">Sobre mim</h1>
            </div>
          </header>
          <div className="container-about-me container">
            <h2 className="container-about-me__title">Olá, eu sou a Camila!</h2>

            <div className="division-container">
              <div className="parag-container">
                <p className="container-about-me__parag">
                  Sou graduada na universidade Nove de Julho, em tecnologia em
                  analise e desenvolvimento de sistemas. E mesmo com o fim do
                  meu curso continuo meus estudos nas plataformas Alura e
                  OneBitCode, com o intuito de aperfeiçoar o que aprendi na
                  faculdade, como também conhecer e me atualizar com novas
                  tecnologias.
                </p>

                <p className="container-about-me__parag">
                  Atualmente trabalho com telemarketing, na empresa Porto
                  Seguro. Lá foi onde pude desenvolver algumas soft skills como:
                  a comunicação, o relacionamento interpessoal e a raciocínio
                  ágil em situações que pedem uma solução imediata.
                </p>
              </div>

              <img
                src="./assets/img/camila-foto.jpg"
                alt="Foto da Camila Silva, mulher com cabelos até a altura do ombro, branca, e olhos castanhos"
                className="photo"
              />
            </div>

            <p className="container-about-me__parag container-about-me__parag--margin-bottom">
              Eu resido em São Paulo, Capital. E estou em busca da minha
              transição de carreira para a area tech, como dev front-end. Com o
              meu cinto de utilidades, onde carrego comigo os conhecimentos de
              HTML5, CSS3, Javascript, Sass, ReactJs, acredito que esse objetivo
              esteja mais próximo que imagino :&#41;{" "}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
