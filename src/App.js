import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home'
import Navbar from './components/Shared/Navbar/Navbar';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/Dashboard/DashBoard';
import RequireAuth from './components/Login/RequireAuth';
import OrderProcess from './components/DashBoard/OrderProcess/OrderProcess';
import OrderList from './components/DashBoard/OrderList/OrderList';
import Review from './components/DashBoard/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/dashboard' element={<RequireAuth>
        <DashBoard/>
       </RequireAuth>}/>
       <Route path='/order/:id' element={<RequireAuth>
        <OrderProcess/>
       </RequireAuth>}/>
       <Route path='/customerorder' element={<RequireAuth>
        <OrderList/>
       </RequireAuth>}/>
       <Route path='/review' element={<RequireAuth>
        <Review/>
       </RequireAuth>}/>
       <Route path='login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
