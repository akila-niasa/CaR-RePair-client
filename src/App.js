import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Navbar from './components/Shared/Navbar/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
