import logo from './logo.svg';
import './App.css';
import { Navbar } from './pages/common/Navbar';
import { ShopNow } from './pages/shopnow/ShopNow';
import { Home } from './pages/Home/Home';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import { Collection } from './pages/Eyeglasses/Collection';
import {SignUp} from './pages/SignUp/SignUp'
import { Login } from './pages/Login/Login';
import { Cart } from './pages/cart/Cart';
function App() {
  return (
    <div className="bg-gray-100 h-screen" >
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Collection" element={<Collection/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/Shopnow" element={<ShopNow/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
