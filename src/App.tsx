import './App.css'
import { Benefits } from './sections/benefits/benefits'
import Favorites from './sections/favorites/favorites'
import MainSection from './sections/main/main-section'
import { Sales } from './sections/sales/sales'

function App() {
  return (
    <div className='app'>
      <MainSection />
      <Sales />
      <Favorites />
      <Benefits />
    </div>
  )
}

export default App
