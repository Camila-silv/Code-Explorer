import { Dropdowm, MdArrowForwardIos } from "../index";
import PropTypes from "prop-types";

export default function NavbarLinkListDropdownItem({
  dropDown,
  condition,
  name,
  children,
}) {
  return (
    <li className="main-navbar-link-list-item" onClick={dropDown} name={name}>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className={
          condition
            ? "main-navbar-link-list-item__link main-navbar-link-list-item__link--selected"
            : "main-navbar-link-list-item__link"
        }
      >
        <div className="navigation-icon-container">
          {children}
          <span className="navigation-icon-container__lbl">{name}</span>
        </div>

        <MdArrowForwardIos className="link__arrow-icon icon--color" />
      </a>

      {condition && <Dropdowm />}
    </li>
  );
}

NavbarLinkListDropdownItem.propTypes = {
  dropDown: PropTypes.func,
  condition: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.element,
};
