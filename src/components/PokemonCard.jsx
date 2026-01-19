import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { deletePokemon } from "../services/pokemonService";

export default function PokemonCard({ pokemon, isLoggedIn, onDelete }) {
  const navigate = useNavigate();
  const mediaUrl = import.meta.env.VITE_MEDIA_BASE_URL;

  const imageUrl = pokemon.picture
    ? `${mediaUrl}/${pokemon.picture}`
    : "";

  const handleDelete = async () => {
    if (confirm("¿Eliminar este Pokémon?")) {
      await deletePokemon(pokemon.id);
      onDelete(pokemon.id);
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={pokemon.name}
      />

      <CardContent>
        <Typography variant="h6">{pokemon.name}</Typography>
        <Typography variant="body2">Tipo: {pokemon.type}</Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1
        }}
      >
        <IconButton
          onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": { backgroundColor: "#115293" }
          }}
        >
          <VisibilityIcon />
        </IconButton>

        {isLoggedIn && (
          <>
            <IconButton
              onClick={() => navigate(`/edit-pokemon/${pokemon.id}`)}
              sx={{
                backgroundColor: "#2e7d32",
                color: "white",
                "&:hover": { backgroundColor: "#1b5e20" }
              }}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              onClick={handleDelete}
              sx={{
                backgroundColor: "#d32f2f",
                color: "white",
                "&:hover": { backgroundColor: "#9a0007" }
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
}
