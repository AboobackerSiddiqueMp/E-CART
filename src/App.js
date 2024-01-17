import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header1 from './components/Header1';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Cart1 from './pages/Cart1';

function App() {
  return (
    <div className="App">
            <Header1></Header1>

      <Routes>
        <Route  path='/' element={<Home></Home>} ></Route>
        <Route  path='/cart' element={<Cart1></Cart1>} ></Route>
        <Route  path='/wishList' element={<Wishlist></Wishlist>} ></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
