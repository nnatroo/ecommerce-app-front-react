import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/modules/App.module.css";
import Home from '../src/pages/Home'
import AddProduct from '../src/pages/AddProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
