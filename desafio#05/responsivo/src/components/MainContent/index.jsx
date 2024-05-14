export default function MainContent() {
  return (
    <main className="main-content">
      <section className="main-content-section ">
        <h1 className="main-content-section__title">
          Make <br className="main-content-section__title--br" /> remote work
        </h1>
        <p className="main-content-section__paragrapgy">
          Get your team in sync, no matter your location. <br /> Streamline
          processes, createteam rituals, and <br /> watch productivity soar.
        </p>

        <a href="/" className="main-content-section__link">
          Learn more
        </a>

        <div className="partner-container">
          <ul className="list-of-partners">
            <li>
              <a href="/">
                <img
                  src="./assets/img/client-databiz.svg"
                  alt="Logo da Databinz"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="./assets/img/client-audiophile.svg"
                  alt="Logo da Audiophile"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="./assets/img/client-meet.svg"
                  alt="Logo da Meet"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="./assets/img/client-maker.svg"
                  alt="Logo da Maker"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="banner-section">
        <img
          src="./assets/img/image-hero-desktop.png"
          alt=""
          className="banner-section__img"
        />
      </section>
    </main>
  );
}
