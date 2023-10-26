import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarBootstrap } from './componentes/nav/navbar/navbar';
import { Accesorios } from './paginas/Accesorios';
import { Calzado } from './paginas/Calzado';
import { Remeras } from './paginas/Remeras';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ItemDetail from './componentes/itemDetail/itemDetail';
import { ContextProvider } from './context/context';
import Cart from './componentes/cart/cart';
import Checkout from './componentes/checkout/checkout';
import Motos from './paginas/Motos';
import Autos from './paginas/Autos';
import Electrodomesticos from './paginas/Electrodomesticos';



function App() {

return(
    <div>
      
    
      <ContextProvider>
    <Router>
      <header>
        <NavbarBootstrap/>
      </header>
      <Routes>
                                    
        <Route path="/" element={<Remeras/>} />                                    
        <Route path="/cart" element={<Cart/>} />                    
        <Route path="/checkout" element={<Checkout/>} />            
        <Route path="/remeras" element={<Remeras/>} />                     
        <Route path='/calzado' element={<Calzado/>}/>                    
        <Route path='/accesorios' element={<Accesorios />}/>                             
        <Route path='/motos' element={<Motos/>}/>                             
        <Route path='/autos' element={<Autos/>}/>                             
        <Route path='/electrodomesticos' element={<Electrodomesticos/>}/>                                             
        <Route path="/:productId" element={<ItemDetail/>} />            
        <Route path='/calzado/:productId' element={<ItemDetail/>}/>            
        <Route path='/accesorios/:productId' element={<ItemDetail/>}/>           
        <Route path='/motos/:productId' element={<ItemDetail/>}/>           
        <Route path='/autos/:productId' element={<ItemDetail/>}/>           
        <Route path='/electrodomesticos/:productId' element={<ItemDetail/>}/>                   
        </Routes>
    </Router>
    </ContextProvider> 
    </div>
    
  )
  
}

export default App;
