import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="contenedor-saludo">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
