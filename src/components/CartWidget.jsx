import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="widget-carrito">
      <FaShoppingCart className="icono-carrito" /> 
      <span className="notificacion-carrito">5</span> 
    </div>
  );
};

export default CartWidget;
