import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import CharacterPage from './components/CharacterPage/CP'
import HomePage from './components/HomePage/HP'
import PlanetPage from './components/PlanetPage/PP'
import VehiclePage from './components/VehiclePage/VP'



function App() {
  return (
      <BrowserRouter>

        <nav>
          {/* Use NavLink for your menu - it automatically adds a active class to which ever
          link the user is looking at
          Use Link for any other links 
          Link and NavLink only work within BrowserRouter
          */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Characters'>Characters</NavLink>
          <NavLink to='/Planets'>Planets</NavLink>
          <NavLink to='/Vehicles'>Vehicles</NavLink>
        </nav>

        {/* Within the Routes component we define our pages (each page is a route) */}
        <Routes>
          {/* We create a Route component for each page */}
          <Route path='/' element={<HomePage />} />
          <Route path='/Characters' element={<CharacterPage />} />
          <Route path='/Planets' element={<PlanetPage />} />
          <Route path='/Vehicles' element={<VehiclePage />} />

          

          {/* Dynamic route - the route path contains a placeholder for some data */}
          
          
        </Routes>


        <footer>
          Copyright 2024 
        </footer>
      </BrowserRouter>
  )
}

export default App
