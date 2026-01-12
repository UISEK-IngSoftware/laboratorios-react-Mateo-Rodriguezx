import { Box, Typography, TextField, Button } from "@mui/material";

export default function PokemonForm() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Formulario de pokemon.
            </Typography>
            <Box component= "form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                <TextField label="Nombre" name="name" variant="outlined" required />
                <TextField label="Tipo" name="type" variant="outlined" required />
                <TextField label="Peso" name="weight" variant="outlined" required />
                <TextField label="Altura" name="height" variant="outlined" required />        
                <input name="picture" type="file"  />      
                <Button variant="contained" color="primary" type="submit">
                    Enviar
                </Button>
            </Box>    
        </>

    );
}