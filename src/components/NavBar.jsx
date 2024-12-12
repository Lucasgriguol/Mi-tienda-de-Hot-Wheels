import React from 'react';
import CartWidget from './CartWidget'; 

const Navbar = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo-navegacion">
        <h2>Mi Tienda</h2>
      </div>
      <ul className="enlaces-navegacion">
        <li><button className="boton-navegacion">Inicio</button></li>
        <li><button className="boton-navegacion">Acerca de</button></li>
        <li><button className="boton-navegacion">Contacto</button></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
