import { Routes, Route, } from "react-router-dom";
import Header from "./components/header/Header"
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";


function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
