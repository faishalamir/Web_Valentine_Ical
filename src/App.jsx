import Card from './Components/Card'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Testing from './Components/Testing'
import Donat from './Components/Donat'
import Coklat from './Components/Coklat'
import Eskrim from './Components/Eskrim'


function App() {

  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Card/>}></Route>
        <Route path='/Testing' element={<Testing/>}></Route>
        <Route path='/Donat' element={<Donat/>}></Route>
        <Route path='/Coklat' element={<Coklat/>}></Route>
        <Route path='/Eskrim' element={<Eskrim/>}></Route>
      </Routes>

    </Router>
  </>
  )
}

export default App
