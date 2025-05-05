
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import UseState from './components/UseState'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/usestate' element={ <UseState /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
