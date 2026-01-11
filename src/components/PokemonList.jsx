import { Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import { pokemons as pokemonsData } from "../data/pokemons";

export default function PokemonList() {
    return (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {pokemonsData.map((pokemon) => (
                <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
        </Grid>
    );
}
