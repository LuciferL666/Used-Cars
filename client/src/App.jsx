import { Routes, Route, } from "react-router-dom";
import Header from "./components/header/Header"
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Create from "./components/create/Create";
import Home from "./components/home/Home";


function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />

      </Routes>
    </div>
  )
}

export default App
