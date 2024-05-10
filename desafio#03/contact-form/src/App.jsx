import { Form, Footer, Banner } from "./components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function App() {
  return (
    <>
      <main className="main-content">
        <div className="contact-us-container container">
          <section className="contact-us-section">
            <h1 className="contact-us-section__title">Contate-nos</h1>

            <p className="contact-us-section__parag contact-us-section__parag--modified">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, est
              itaque? Esse odit optio porro.
            </p>

            <p className="contact-us-section__parag">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              rerum minima eum cupiditate quasi, assumenda omnis maxime minus
              iusto cumque amet facere! Nulla nobis iusto dicta, voluptas
              corrupti officiis qui!
            </p>

            <ul className="list-of-social-networks">
              <li className="social-network-list-item">
                <a
                  href="/"
                  target="_blanck"
                  className="social-network-list-item__link"
                >
                  <FaFacebookF className="social-network-list-item__icon" />
                </a>
              </li>
              <li className="social-network-list-item">
                <a
                  href="/"
                  target="_blanck"
                  className="social-network-list-item__link"
                >
                  <FaTwitter className="social-network-list-item__icon" />
                </a>
              </li>
              <li className="social-network-list-item">
                <a
                  href="/"
                  target="_blanck"
                  className="social-network-list-item__link"
                >
                  <FaInstagram className="social-network-list-item__icon" />
                </a>
              </li>
              <li className="social-network-list-item">
                <a
                  href="/"
                  target="_blanck"
                  className="social-network-list-item__link"
                >
                  <FaLinkedinIn className="social-network-list-item__icon" />
                </a>
              </li>
            </ul>
          </section>
          <Form />
        </div>
        <Banner />
      </main>
      <Footer />
    </>
  );
}
