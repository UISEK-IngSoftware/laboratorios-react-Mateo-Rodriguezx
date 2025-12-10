import PokemonCard from './PokemonCard'
import { pokemons } from '../data/pokemons'
import { Grid } from '@mui/material'

export default function PokemonList() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {pokemons.map((pokemon, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
