import { useEffect, useState } from 'react'
import './App.css'

interface Product {
  id: number;
  name: string;
  price: number;
  image: String;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect se ejecuta cuando la página carga
useEffect(() => {
  //Llamamos al servidor
  fetch('http://127.0.0.1:3000/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(error => console.error("Error cargando productos", error))
}, []);

  return (
    <div className="app-container">
      <h1>Tienda de discos</h1>
      <div className="products-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
        {products.map((product) => (
          <div key={product.id} style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px'}}>
            <div style={{ fontSize: '50px'}}>{product.image}</div>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
      {products.length === 0 && <p>Cargando productos...</p>}
    </div>
  )
}

export default App
