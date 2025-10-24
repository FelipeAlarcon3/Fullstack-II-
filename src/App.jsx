import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Registro from './components/pages/Registro'
import Inicio from './components/pages/Inicio'

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      &nbsp;|&nbsp;
      <Link to='/cart'>Carrito</Link>
      &nbsp;|&nbsp;
      <Link to='/Registro'>Registro</Link>
      &nbsp;|&nbsp;
      <Link to='/Inicio'>Iniciar sesion</Link>
      <br /><br />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/cart' Component={Cart} />
        <Route path="/Registro" Component={Registro} />
        <Route path="/Inicio" Component={Inicio} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
