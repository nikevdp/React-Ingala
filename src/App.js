
import NavBar from "./componentes/modulosNav/nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./componentes/ItemList/ItemList.js";
import "./App.css"
function App() {
  return (
  <div>
    <header style={{borderBottom:"1px solid black"}}>
    <NavBar />
    </header>
    
    <h2 className="titulo">Nuestros productos</h2>
    
    <ItemList producto="papas" precio="250$"/>

   
  </div>
  );
}

export default App;
