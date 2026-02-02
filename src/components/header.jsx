import { AppBar, Button, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/logo.png";
import { logout } from "../services/authService";
import './Header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "./spinner";

export default function Header() {
    const isLoggedIn = localStorage.getItem('access_token') !== null;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handeLogout = async () => {
        setLoading(true);
        try {
            await logout();
            alert("Cierre de sesión exitoso");
            navigate('/');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <header className="pokedex-navbar">
            <AppBar position="static">
                <Toolbar>
                    <div className="image-conteiner">
                        <img src={pokedexLogo} alt="Pokédex Logo" height={100} />
                    </div>
                </Toolbar>
                <Toolbar>
                    <Button color="inherit" href="/">Inicio</Button>
                    {isLoggedIn &&
                        <>
                            <Button color="inherit" href="/add-pokemon">Agregar Pokémon</Button>
                            <Button color="inherit" onClick={handeLogout}>Cerrar Sesión</Button>
                        </>
                    }
                    {!isLoggedIn && <Button color="inherit" href="/login">Iniciar Sesión</Button>}
                </Toolbar>
            </AppBar>
        </header>
    );
}
