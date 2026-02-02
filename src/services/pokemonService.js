import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchPokemons = async () => {
  const res = await axios.get(`${API_BASE_URL}/pokemons/`);
  return res.data;
};

export const getPokemonById = (id) => {
  return axios.get(`${API_BASE_URL}/pokemons/${id}/`);
};

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const addPokemon = async (pokemonData) => {
  let pictureBase64 = "";
  if (pokemonData.picture instanceof File) {
    pictureBase64 = await fileToBase64(pokemonData.picture);
  }

  const payload = { ...pokemonData, picture: pictureBase64 };
  const res = await axios.post(`${API_BASE_URL}/pokemons/`, payload);
  return res.data;
};

export const updatePokemon = async (id, pokemonData) => {
  let pictureBase64 = pokemonData.picture;

  if (pokemonData.picture instanceof File) {
    pictureBase64 = await fileToBase64(pokemonData.picture);
  }

  const payload = { ...pokemonData, picture: pictureBase64 };
  return axios.put(`${API_BASE_URL}/pokemons/${id}/`, payload);
};

export const deletePokemon = (id) => {
  return axios.delete(`${API_BASE_URL}/pokemons/${id}/`);
};

