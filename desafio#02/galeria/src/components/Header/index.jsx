export default function Header() {
  return (
    <header className="main-header container">
      <img
        src="./assets/img/logo.png"
        alt="Logo da página"
        className="main-header__logo"
      />
      <div className="burger-menu">
        <div className="burger-menu__item"></div>
        <div className="burger-menu__item"></div>
        <div className="burger-menu__item"></div>
      </div>
    </header>
  );
}
