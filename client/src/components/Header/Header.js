import "./Header.css";

function Header() {
    /** @todo add icons */
    const logoPath = require("../../assets/logo.png");
    return (
        <div className="Header">
            <img className="logoImg" src={logoPath}></img>
        </div>
    );
}

export default Header;