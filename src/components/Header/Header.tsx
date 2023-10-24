import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__thumbnail"
        alt="Crêpes raffinées"
        src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
      <div className="header__content">
        <h1 className="header__title">Crêpes raffinées</h1>
        <p className="header__subtitle">John Deuf - Facile</p>
      </div>
    </header>
  );
}

export default Header;
