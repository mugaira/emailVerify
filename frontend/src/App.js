import './App.css';
import Login from './component/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ChangePassword from './component/ChangePassword';

function App() {
  return (
    <>
    <BrowserRouter>
    <h1>login</h1>
    <Routes>
   
    <Route path='/' element={<Login />} />
    <Route path ='/changepassword' element={<ChangePassword />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
