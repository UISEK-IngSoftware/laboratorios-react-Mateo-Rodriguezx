import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemons } from "../services/pokemonService";

export default function PokemonList() {

    const [pokemons, setPokemons] = useState([]);

    const isLoggedIn = localStorage.getItem("access_token") !== null;

    useEffect(() => {
        fetchPokemons()
            .then(data => setPokemons(data))
            .catch(error => {
                alert("Error obteniendo los pokemons");
                console.error(error);
            });
    }, []);

    const handleDeleteLocal = (id) => {
        setPokemons(pokemons.filter(p => p.id !== id));
    };

    return (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {pokemons.map(pokemon => (
                <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
                    <PokemonCard
                        pokemon={pokemon}
                        isLoggedIn={isLoggedIn}
                        onDelete={handleDeleteLocal}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
