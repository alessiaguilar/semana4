import React from 'react';

const Header = () => {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                Logo
            </a>
            
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Historia</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Tipos</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Blog</a></li>
            </ul>
            
            <div className="col-md-3 text-end">
                Contenido adicional
            </div>
        </header>
    );
}

export default Header;
