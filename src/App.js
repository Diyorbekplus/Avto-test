import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import "./style/css/style.css"
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App 