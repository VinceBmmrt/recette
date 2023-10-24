import './Header.scss';

// 1ère étape : Créer un contrat pour les props
type HeaderProps = {
  title: string;
  author: string;
  difficulty: string;
  thumbnail: string;
};
// 2ème étape : Utiliser le contrat pour typer les props
function Header({ title, author, difficulty, thumbnail }: HeaderProps) {
  return (
    <header className="header">
      <img className="header__thumbnail" alt={title} src={thumbnail} />
      <div className="header__content">
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">
          {author} - {difficulty}
        </p>
      </div>
    </header>
  );
}

export default Header;
