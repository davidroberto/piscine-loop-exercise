const Header = () => {
  const userName = "David";

  return (
    <header>
      <nav>
        <img
          src="https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph"
          alt="logo"
        />

        <ul>
          <li>Accueil</li>
          <li>blog</li>
        </ul>

        <p>Bonjour {userName}</p>
      </nav>
    </header>
  );
};

export default Header;
