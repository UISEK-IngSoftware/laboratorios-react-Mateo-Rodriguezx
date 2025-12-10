import './App.css'
import Header from './components/header'
import PokemonList from './components/pokemonList'
import { Container, Grid } from '@mui/material'

function App() {

  return (
    <>
      <Header />
      <Container>
      <PokemonList />
      </Container>
    </>
  )
}

export default App