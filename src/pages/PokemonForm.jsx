import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addPokemon,
  getPokemonById,
  updatePokemon
} from "../services/pokemonService";

export default function PokemonForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState({
    name: "",
    type: "",
    weight: "",
    height: "",
    picture: null
  });

  useEffect(() => {
    if (id) {
      getPokemonById(id).then(res => {
        setPokemonData({
          name: res.data.name,
          type: res.data.type,
          weight: res.data.weight,
          height: res.data.height,
          picture: res.data.picture
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "picture") {
      setPokemonData({ ...pokemonData, picture: files[0] });
    } else {
      setPokemonData({ ...pokemonData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updatePokemon(id, pokemonData);
        alert("Pokémon actualizado correctamente");
      } else {
        await addPokemon(pokemonData);
        alert("Pokémon agregado correctamente");
      }

      navigate("/");
    } catch (error) {
      console.error("Error guardando Pokémon:", error);
      alert("Error al guardar Pokémon");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id ? "Editar Pokémon" : "Agregar Pokémon"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Nombre" name="name" value={pokemonData.name} onChange={handleChange} required />
        <TextField label="Tipo" name="type" value={pokemonData.type} onChange={handleChange} required />
        <TextField label="Peso" name="weight" value={pokemonData.weight} onChange={handleChange} required />
        <TextField label="Altura" name="height" value={pokemonData.height} onChange={handleChange} required />

        <input type="file" name="picture" onChange={handleChange} />

        <Button variant="contained" type="submit">
          Guardar
        </Button>
      </Box>
    </Box>
  );
}
