import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import PokemonList from './pages/PokemonList'
import PokemonForm from './pages/PokemonForm'
import { Container, Grid } from '@mui/material'
import LoginPage from './pages/LoginPage'

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
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App