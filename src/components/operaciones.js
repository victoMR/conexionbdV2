import React, { useState } from "react";
import Transaction1 from "../../pages/transaction1";
import Transaction2 from "../../pages/transaction2";


const Operaciones = () => {
  // const [result, setResult] = useState();
  
  const [products, setProducts] = useState([]);
  /////
  //////
  const handleSearch = async () => {
    try {
      const response = await fetch("/api/search-products");

      if (response.ok) {
        const data = await response.json();

        setProducts(data.products);
      } else {
        console.error("Error al buscar productos");
      }
    } catch (error) {
      console.error(`Error en la solicitud: ${error}`);
    }
  };

  return (
    // <div>
    //     Hola mundo cruel!!
    // </div>         handleVista
    <div>

      {/* */
      /**/}
      <button onClick={handleSearch}className="bg-dark text-light p-4 rounded-lg">Productos</button>
      <br></br><br></br>
      <div>
        {/* Resultado de productos: <span>{products}</span> */}
        {products && products.length > 0 &&(
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id_product}>
                  <td>{product.id_product}</td>
                  <td>{product.nom_product}</td>
                  <td>{product.desc_product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      <br></br>
      <Transaction1 /> {/* Agrega la transacción 1 */}
      <br></br>
      <Transaction2 /> 
      </div>
      <br></br>
      <button onClick={handleSearch}>Productos</button>
      <br></br><br></br>
      <div>
        {/* Resultado de productos: <span>{products}</span> */}
        {products && products.length > 0 &&(
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id_product}>
                  <td>{product.id_product}</td>
                  <td>{product.nom_product}</td>
                  <td>{product.desc_product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
    </div>
  );

  // vista.js
};

export default Operaciones;
