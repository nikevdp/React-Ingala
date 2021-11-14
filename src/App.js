
import NavBar from "./componentes/modulosNav/nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import { ItemListConteiner } from "./componentes/ItemListConteiner/ItemListConteiner.js";

function App() {
  return (
  <div>
    <header style={{borderBottom:"1px solid black"}}>
    <NavBar />
    </header>
    
    <h2 className="titulo">Nuestros productos</h2>
    
    <ItemListConteiner/>

   
  </div>
  );
}

export default App;
