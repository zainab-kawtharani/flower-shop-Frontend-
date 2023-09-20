
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar,Home,ComingSoon } from './Components';
function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <ComingSoon/>
       <Routes>
          <Route exact path='/' element={<Home/>}/> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;
