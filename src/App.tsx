import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './features/Home';
import Services from './features/Services';
import About from './features/About';
import Contact from './features/Contact';

const App = ()=>{

  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
