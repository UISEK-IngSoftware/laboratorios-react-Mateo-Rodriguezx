import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  const mediaUrl = import.meta.env.VITE_MEDIA_BASE_URL;
  pokemon.image = `${mediaUrl}/${pokemon.picture}`;
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={pokemon.image}
        alt={pokemon.name}
      />

      <CardContent>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Tipo: {pokemon.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}
