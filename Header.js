import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={{height: "20px", backgroundColor: "green"}}>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{display: "flex", alignItems: "center"}}>
                <Link to="/" style={{marginLeft: "24px", display: "flex", alignItems: "center"}}>
                    <img src="/w-logo.svg" alt="W Logo" style={{height: "32px", width: "32px", marginRight: "8px"}} />
                    <span style={{color: "#080808", fontSize: "20px", fontFamily: "Arial, sans-serif"}}>w'site</span>
                </Link>

                <div style={{flex: 1}}></div>
                <button className="nav-link" style={{background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, font: "inherit", marginLeft: "16px"}}>Home<span className="sr-only"></span></button>
          
                <button className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    );
}

export default Header;
