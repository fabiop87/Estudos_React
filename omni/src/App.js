import './App.css';
import Banda from './components/Banda';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import POmni from './components/pages/POmni';
import PAqua from './components/pages/PAqua';
import PRebirth from './components/pages/PRebirth';
import PHolyLand from './components/pages/PHolyLand';
import Navbar from './components/Navbar';
function App() {




  return (
    <div className="App">
      <h1><Banda/></h1>
      
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact='true' element={<POmni/>}></Route>
            <Route path='/Aqua' element={<PAqua/>}></Route>
            <Route path='/Rebirth' element={<PRebirth/>}></Route>
            <Route path='/HolyLand' element={<PHolyLand/>}></Route>

          </Routes>
        </Router>




      {/* <TableAqua/>
      <TableOmni/>
     */}
      {/* { <Musica nome="Caveman" tempo="5:53" /> } */}


    </div>
  );
}

export default App;
// Stop Server : CTRL + C