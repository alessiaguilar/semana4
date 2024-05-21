import { Link } from "react-router-dom";

const Header = () =>{
    return <div className="d-flex justify-content-center py-3 bg-dark">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active text-white" aria-current="page"><i data-feather="home"></i> Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white"><i data-feather="shopping-cart"></i> Productos</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white"><i data-feather="user"></i> Acerca de Nosotros</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white"><i data-feather="help-circle"></i> Consulta</a></li>
      </ul>
    </div>
}

export default Header;