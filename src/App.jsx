import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import PokemonList from './pages/PokemonList'
import PokemonForm from './pages/PokemonForm'
import { Container, Grid } from '@mui/material'
import LoginPage from './pages/LoginPage'
import PokemonDetail from "./pages/PokemonDetail";



function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/add-pokemon' element={<PokemonForm />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="/edit-pokemon/:id" element={<PokemonForm />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App