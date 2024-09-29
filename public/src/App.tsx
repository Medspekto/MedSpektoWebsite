import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './features/Home';
import About from './features/About';

const App = ()=>{

  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
