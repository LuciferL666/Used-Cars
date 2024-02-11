import { Routes, Route, } from "react-router-dom";
import Header from "./components/header/Header"
import Catalog from "./components/catalog/Catalog";


function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </div>
  )
}

export default App
