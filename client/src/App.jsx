import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Service } from "./Pages/Service";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Navbar } from "./component/Navbar";


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Navbar/>{/**So basically hmm navbar ko yaha import krengr yaani ye saare routes me show ho like navbar with about navbar with home etc   */}
      <Routes>
        <Route    
          path="/"
          element={<Home/>}
        /> {/*void ele*/ }
        <Route    
          path="/about"
          element={<About/>}
        />
        <Route    
          path="/contact"
          element={<Contact/>}
        />
        <Route    
          path="/service"
          element={<Service/>}
        /> 
        <Route    
          path="/register"
          element={<Register/>}
        />
        <Route    
          path="/login"
          element={<Login/>}
        />      
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;