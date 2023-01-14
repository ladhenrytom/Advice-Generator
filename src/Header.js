import logo from "./logo.jpeg";

function Header() {
  return (
    <nav className="header">
      <img alt="" src={logo} />
      <h1>Generator</h1>
    </nav>
  );
}

export default Header;
