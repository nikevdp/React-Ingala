import "./nav.css"
import CartWidget from "./../CartWidget/CartWidget.js"
import { Navbar } from 'react-bootstrap';

const NavBar =()=>{
    
    return(
    
    <Navbar className="nave" bg="dark" variant="dark">
        <h2>Super tienda</h2>
        <ul>
            <li>extencion1</li>
            <li>extencion2</li>
            <li>extencion3</li>
            <li>extencion4</li>
            <li><CartWidget/></li>
        </ul>
       
    </Navbar>

    )
}
export default NavBar;