import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import PokemonList from './pages/PokemonList'
import PokemonForm from './pages/PokemonForm'
import { Container, Grid } from '@mui/material'

function App() {

  return (
    <>
      <Header />
      <Container>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/add-pokemon' element={<PokemonForm />} />
      </Routes>
      </BrowserRouter>
      </Container>
    </>
  )
}

export default App