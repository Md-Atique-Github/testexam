
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import { FirstPage } from './Component/FirstPage';
import SecondPage from './Component/SecondPage';
import ThirdPage from './Component/ThirdPage';
import Forthpage from './Component/Forthpage';

function App() {
  return (
    <div>
     <Router>
    <Navbar/>
<Routes>

 <Route path='/' element={<FirstPage />} />
 <Route path='/second/:id' element={<SecondPage />} />
 <Route path='/ThirdPage/:id' element={<ThirdPage/>} />
 <Route path='/ForthPage/:id' element={<Forthpage/>} />


</Routes>

     </Router>
    </div>
  );
}

export default App;
