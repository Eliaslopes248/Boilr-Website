import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DocsMain from './pages/DocsMain'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/docs-main' element={<DocsMain/>}/>
      </Routes>
    </Router>
  )
}

export default App
