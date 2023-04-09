import logo from './logo.svg';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Cart from './pages/Cart ';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';

import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import './App.css';
import Home from './pages/Home';
function App() {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = { <Home/> } /> 
 <Route path = '/cart' element = { <Cart/> } /> 
 <Route path = '/categorypage' element = { <CategoryPage/> } /> 
 <Route path = '/login' element = { <Login/> } /> 
 <Route path = '/productpage' element = { <ProductPage/> } /> 
 <Route path = '/register' element = { <Register/> } /> 
        </Routes>
        </BrowserRouter>
    );
}

export default App;