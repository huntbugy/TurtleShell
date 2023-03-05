import React from "react"
import logo from "../assets/turtle.svg"
import open_dapp from "../assets/open-dApp-button.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navbar-row">
                <div>
                    <img className="navbar-logo" src={logo} alt="Logo" />
                </div>

                <div className="navbar-text">TrutleShell</div>
            </div>

            <div>
                <a href="/new-audit/choose">
                    <img className="dApp-button" src={open_dapp} alt="Open dApp" />
                </a>
            </div>
        </div>
    )
}

export default Navbar
