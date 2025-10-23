import { useState, useEffect } from 'react';
import './Cart.css'; // Importa el CSS

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(cart);
  };

  const handleRemove = (code) => {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    const filtered = cart.filter(p => p.code !== code);
    localStorage.setItem("products", JSON.stringify(filtered));
    setProducts(filtered);
  };

  const handleClear = () => {
    if (window.confirm('¿Estás seguro de vaciar todo el carrito?')) {
      localStorage.removeItem('products');
      setProducts([]);
    }
  };

  const calculateTotal = () => {
    return products.reduce((sum, p) => {
      const price = parseInt(p.price.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0);
  };
  const handleCheckout = () => {
  const total = calculateTotal();
  const message = `
  📦 Resumen de tu pedido:

  Productos: ${products.length}
  Total: $${total.toLocaleString('es-CL')} CLP

  ¿Confirmar compra?
  `;
  
  if (window.confirm(message)) {
    alert('✅ ¡Compra exitosa! Recibirás un email de confirmación.');
    localStorage.removeItem('products');
    setProducts([]);
  }
};
  return (
    <div className="cart-container">
      <div className="cart-header">
        <p>🛒 <span className="items">{products.length}</span> productos</p>
      </div>
      
      {products.length === 0 ? (
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega algunos productos frescos para empezar!</p>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>CÓDIGO</th>
                <th>IMAGEN</th>
                <th>NOMBRE</th>
                <th>DESCRIPCIÓN</th>
                <th>PRECIO</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.code}>
                  <td>{p.code}</td>
                  <td>
                    <img src={p.image} alt={p.name} />
                  </td>
                  <td><strong>{p.name}</strong></td>
                  <td>{p.description}</td>
                  <td><strong>{p.price}</strong></td>
                  <td>
                    <button 
                      onClick={() => handleRemove(p.code)}
                      className="btn-remove"
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="cart-footer">
            <div className="cart-total">
              <h2>Total: ${calculateTotal().toLocaleString('es-CL')} CLP</h2>
            </div>
            <div className="cart-actions">
              <button onClick={handleClear} className="btn-clear">
                Vaciar Carrito
              </button>
              <button onClick={handleCheckout} className="btn-checkout">
              💳 Proceder al Pago
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}