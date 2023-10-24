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
import Televisores from './paginas/Televisores';
import Heladeras from './paginas/Heladeras';



function App() {

return(
    <div>
      
    
      <ContextProvider>
    <Router>
      <header>
        <NavbarBootstrap/>
      </header>
      <Routes>
        <Route path="/ProyectoFinalReact_MaximilianoTrochon/" element={<Remeras/>} />                                    
        <Route path="/ProyectoFinalReact_MaximilianoTrochon/cart" element={<Cart/>} />                    
        <Route path="/ProyectoFinalReact_MaximilianoTrochon/checkout" element={<Checkout/>} />            
        <Route path="/ProyectoFinalReact_MaximilianoTrochon/remeras" element={<Remeras/>} />                     
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/calzado' element={<Calzado/>}/>                    
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/accesorios' element={<Accesorios />}/>                             
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/motos' element={<Motos/>}/>                             
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/autos' element={<Autos/>}/>                             
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/televisores' element={<Televisores/>}/>                             
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/heladeras' element={<Heladeras/>}/>                             
        <Route path="/ProyectoFinalReact_MaximilianoTrochon/:productId" element={<ItemDetail/>} />            
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/calzado/:productId' element={<ItemDetail/>}/>            
        <Route path='/ProyectoFinalReact_MaximilianoTrochon/accesorios/:productId' element={<ItemDetail/>}/>           
        </Routes>
    </Router>
    </ContextProvider> 
    </div>
    
  )
  
}

export default App;
