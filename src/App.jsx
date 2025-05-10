
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import UseState from './components/UseState'
import LearningUseEffect from './components/UseEffect'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/usestate' element={ <UseState /> } />
      <Route path='/useEffect' element={ <LearningUseEffect /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
