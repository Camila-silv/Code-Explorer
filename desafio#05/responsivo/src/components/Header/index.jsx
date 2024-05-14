import {
  IoIosArrowDown,
  IoIosNotifications,
  FaCalendar,
  FaClock,
  MdEventNote,
  IoMenu,
} from "../index";
import { useState } from "react";

export default function Header() {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const dropdown = (e) => {
    setFeatures(false);
    setCompany(false);

    switch (e.target.name) {
      case "features":
        features ? setFeatures(false) : setFeatures(true);
        break;
      case "company":
        company ? setCompany(false) : setCompany(true);
        break;
    }
  };
  return (
    <header className="main-header container">
      <div className="main-header-container">
        <img
          src="./assets/img/logo.svg"
          alt=""
          className="main-header__icon"
        />

        <nav className="main-navbar">
          <ul className="main-navbar-list">
            <li className="main-navbar-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-list-item__link"
                onClick={dropdown}
                name="features"
              >
                Features
                <IoIosArrowDown className="arrow" />
              </a>

              {features && (
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer "
                      className="dropdown-menu-item__link"
                    >
                      <MdEventNote className="dropdown-menu-item__icon" />
                      Todo List
                    </a>
                  </li>
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-menu-item__link"
                    >
                      <FaCalendar className="dropdown-menu-item__icon" />{" "}
                      Calendar
                    </a>
                  </li>
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-menu-item__link"
                    >
                      <IoIosNotifications className="dropdown-menu-item__icon" />{" "}
                      Reminders
                    </a>
                  </li>
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-menu-item__link"
                    >
                      <FaClock className="dropdown-menu-item__icon" /> Palnning
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-navbar-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-list-item__link"
                onClick={dropdown}
                name="company"
              >
                Company
                <IoIosArrowDown className="arrow" />
              </a>

              {company && (
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer "
                      className="dropdown-menu-item__link"
                    >
                      History
                    </a>
                  </li>
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-menu-item__link"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="dropdown-menu-item">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-menu-item__link"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-navbar-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-list-item__link"
              >
                Careers
              </a>
            </li>
            <li className="main-navbar-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-list-item__link"
              >
                About
              </a>
            </li>
          </ul>

          <div className="burger-menu">
            <button className="burger-menu__menu">
              <IoMenu />
            </button>
          </div>
        </nav>

        <div className="buttons-container">
          <button className="buttons-container__button ">Login</button>
          <button className="buttons-container__button button--border">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
