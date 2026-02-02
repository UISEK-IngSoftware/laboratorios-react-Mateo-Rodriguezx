import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useState } from "react";
import Spinner from "../components/spinner";

export default function LoginPage() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const responseData = await login(loginData.username, loginData.password);
            localStorage.setItem('access_token', responseData.access_token);
            alert("Inicio de sesión exitoso");
            navigate('/');
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: '0 auto', mt: 5 }}>
            <Typography variant="h5" gutterBottom>
                Inicio de Sesión
            </Typography>
            <TextField 
                label="Usuario"    
                name="username" 
                variant="outlined" 
                value={loginData.username}
                onChange={handleChange}
                required 
            />
            <TextField 
                label="Contraseña" 
                name="password"
                type="password" 
                value={loginData.password}
                onChange={handleChange}
                variant="outlined" 
                required
            />
            <Button variant="contained" color="primary" type="submit" disabled={loading}>
                Iniciar Sesión
            </Button>
        </Box>
    );
}
