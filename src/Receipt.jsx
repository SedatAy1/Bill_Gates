import React from "react";

function Receipt({ products }) {
  // Satın alınan ürünleri filtreleyin
  const purchasedProducts = products.filter((product) => product.quantity > 0);

  // Toplam maliyeti hesaplayın
  const totalCost = purchasedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="receipt">
      <h2>Your Receipt</h2>
      <ul>
        {purchasedProducts.map((product) => (
          <li key={product.id}>
            {product.name} x{product.quantity} = ${product.price * product.quantity}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total: ${totalCost.toLocaleString()}</h3>
    </div>
  );
}

export default Receipt;