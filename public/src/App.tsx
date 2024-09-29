import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './features/Home';
import Services from './features/Services';

const App = ()=>{

  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='services' element={<Services/>}/>
      </Routes>
    </Router>
  )
}

export default App
