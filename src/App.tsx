import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
