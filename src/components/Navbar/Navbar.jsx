import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const NavBar = () => { 
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3 className="Titulo" style={{textDecoration: 'none'}}>Ecommerce</h3>
                
            </Link>
                <div className="Categoria">
                    <NavLink to='/category/celular' className={({ isActive }) => isActive ? 'Active': 'Option'}>
                        <Button variant="primary" size="lg" active>Celular</Button>
                    </NavLink>
                    <NavLink to='/category/tablets' className={({ isActive }) => isActive ? 'Active': 'Option'}>
                        <Button variant="primary" size="lg" active>Tablets</Button>
                    </NavLink>
                    <NavLink to='/category/notebook' className={({ isActive }) => isActive ? 'Active': 'Option'}>
                        <Button variant="primary" size="lg" active>Notebook</Button> 
                    </NavLink>

                    
                </div>
                
            <CartWidget />
        </nav>

    )
}

export default NavBar
