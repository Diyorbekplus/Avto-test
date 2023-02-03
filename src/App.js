import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import "./style/css/style.css";

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
