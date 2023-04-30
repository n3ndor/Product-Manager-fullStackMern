import './App.css';

import OneProduct from "./components/OneProduct";
import Main from "./views/Main"
import Update from "./components/Update"
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<OneProduct />} />
          <Route path="/products/edit/:id" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
