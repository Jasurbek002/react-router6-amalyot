
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
// import Navbar from './companents/Navbar';
import Adminlayote from './Laoutes/AdminLayote';
import Noadminlaout from './Laoutes/Noadminlaout';
import Protetctedroute from './companents/ProtectedRoute/Protetctedroute';
import About from './pages/About';
import Blog from './pages/blog';
import Login from './Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Adminlayote />} >
            <Route  path='/Home' element={
              <Protetctedroute>
                <Home index />
              </Protetctedroute>
            } ></Route>
            <Route path='/Contacts' element={
              <Protetctedroute>
             <Contacts />
            </Protetctedroute>
            } ></Route>
            <Route path='/About' element={
              <Protetctedroute>
              <About />
             </Protetctedroute>
            } ></Route>
            <Route path='/Blog' element={
               <Protetctedroute>
                <Blog />
              </Protetctedroute>
            } ></Route>
          </Route>

          <Route path='/auth' element={<Noadminlaout />}>
            <Route path='' element={<Navigate to="/auth/login" replace={true} />}></Route>
            <Route path='login' index element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
