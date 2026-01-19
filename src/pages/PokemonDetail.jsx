import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

import { getPokemonById } from "../services/pokemonService";

export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  const mediaUrl = import.meta.env.VITE_MEDIA_BASE_URL;

  useEffect(() => {
    getPokemonById(id)
      .then(res => {
        setPokemon(res.data);
      })
      .catch(err => {
        console.error("Error cargando pokemon:", err);
      });
  }, [id]);

  if (!pokemon) {
    return <Typography>Cargando...</Typography>;
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
