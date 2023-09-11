// import Counter from "./Components/Counter";
import { Route,  Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
const App = () => {
  return (

    // for counter App

    // <div>
    // <Counter></Counter>
    
    // </div>


    // for shoping cart
    <div>
      <div className="bg-slate-900">
      <Navbar ></Navbar>
      </div>
     
     <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/cart' element={<Cart></Cart>} ></Route>
     </Routes>
    </div>
  )
};

export default App;
