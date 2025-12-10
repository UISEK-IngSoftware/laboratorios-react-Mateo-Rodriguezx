import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/pokedex-logo.png";
import './header.css';

export default function Header() {
    return (
        <header className="Pokedex-navbar">
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <img src={logo} alt="Pokedex logo" />
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
}
