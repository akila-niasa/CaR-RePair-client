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
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import RequireAdmin from './components/Login/RequireAdmin';
import AllOrders from './components/DashBoard/AllOrders/AllOrders';
import { Toaster } from 'react-hot-toast';
import Payment from './components/DashBoard/Payment/Payment';
import AddServices from './components/DashBoard/AddServices/AddServices';
import ManageService from './components/DashBoard/ManageService/ManageService';
import MyProfile from './components/DashBoard/Dashboard/MyProfile/MyProfile';

function App() {
  return (
    <div className="App">
     
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='order/:id' element={
       <RequireAuth>
          <OrderProcess/>
       </RequireAuth>
       }/>
       <Route path='dashboard' element={<RequireAuth>
        <DashBoard/>
       </RequireAuth>}>
    
       <Route path='profile' element={<RequireAuth>
        <MyProfile/>
       </RequireAuth>}/>
       
       <Route path='customerorder' element={
        <OrderList/>
       }/>
       <Route path='pay' element={
        <Payment/>
       }/>
       <Route path='review' element={
        <Review/>
      }/>
       <Route path='admin' element={
        <RequireAdmin>
        <MakeAdmin/>
        </RequireAdmin>
      }/>
       <Route path='orderlist' element={
        <RequireAdmin>
        <AllOrders/>
        </RequireAdmin>
      }/>
       <Route path='addservices' element={
        <RequireAdmin>
        <AddServices/>
        </RequireAdmin>
      }/>
       <Route path='manageservice' element={
        <RequireAdmin>
        <ManageService/>
        </RequireAdmin>
      }/>
       </Route>
       <Route path='login' element={<Login/>}/>
     </Routes>
     <Toaster/>
    </div>
  );
}

export default App;
