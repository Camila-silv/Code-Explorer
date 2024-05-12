import PropTypes from "prop-types";

export default function MainNavbarLinkListItem({ children, lbl, selected }) {
  return (
    <li className="main-navbar-link-list-item">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className={
          selected
            ? "main-navbar-link-list-item__link link--selected"
            : "main-navbar-link-list-item__link"
        }
      >
        <div className="navigation-icon-container">
          {children}
          <span className="navigation-icon-container__lbl">{lbl}</span>
        </div>
      </a>
    </li>
  );
}

MainNavbarLinkListItem.propTypes = {
  children: PropTypes.element,
  lbl: PropTypes.string,
  selected: PropTypes.bool,
};
