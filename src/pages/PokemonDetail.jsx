import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { getPokemonById } from "../services/pokemonService";
import Spinner from "../components/spinner";

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const mediaUrl = import.meta.env.VITE_MEDIA_BASE_URL;

  useEffect(() => {
    setLoading(true);
    getPokemonById(id)
      .then(res => {
        setPokemon(res.data);
      })
      .catch(err => {
        console.error("Error cargando pokemon:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!pokemon) {
    return <Typography>No se pudo cargar el Pokémon</Typography>;
  }

  const imageUrl = pokemon.picture
    ? `${mediaUrl}/${pokemon.picture}`
    : "";

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Card sx={{ width: 400 }}>
        <CardMedia
          component="img"
          height="250"
          image={imageUrl}
          alt={pokemon.name}
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            {pokemon.name}
          </Typography>

          <Typography>Tipo: {pokemon.type}</Typography>
          <Typography>Peso: {pokemon.weight}</Typography>
          <Typography>Altura: {pokemon.height}</Typography>

          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => navigate(-1)}
          >
            Regresar
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
