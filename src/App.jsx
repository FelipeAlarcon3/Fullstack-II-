import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      &nbsp;|&nbsp;
      <Link to='/cart'>Carrito</Link>
      <br /><br />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
