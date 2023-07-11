
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import { FirstPage } from './Component/FirstPage';

function App() {
  return (
    <div>
     <Router>
    <Navbar/>
<Routes>

 <Route path='/' element={<FirstPage />} />

</Routes>

     </Router>
    </div>
  );
}

export default App;
