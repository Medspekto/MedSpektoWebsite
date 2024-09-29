import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './features/Home';

const App = ()=>{

  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
