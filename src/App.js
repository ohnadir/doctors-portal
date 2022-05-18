import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Component/Page/Login/Login';
import Signup from './Component/Page/Login/Signup';
import Navbar from './Component/Shared/Navbar';
import Home from './Component/Page/Home/Home';
import Appointment from './Component/Page/Appointment/Appointment';
import RequireAuth from './Component/Page/Login/RequireAuth'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment/></RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
