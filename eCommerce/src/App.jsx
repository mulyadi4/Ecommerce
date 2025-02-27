import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
       <Route path="/login" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
