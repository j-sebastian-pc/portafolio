import React, { useEffect, useState } from 'react';

export const AboutMe = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realizar la solicitud HTTP a la API
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const openBlue = () => {
    window.open('https://blueasy04.netlify.app', '_blank');
  };
  const openPijam = () => {
    window.open('https://pijamascaramelozzz.netlify.app/', '_blank');
  };
  const openBleux = () => {
    window.open('https://iniciotuproveedor.netlify.app/', '_blank');
  };

  return (
    <section className="bg-gray-100 min-h-screen p-10">
      <div className="text-center text-gray-600 py-8">
        <p className="text-lg"></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-transform transform duration-300 ease-in-out"
            onClick={() => window.open(product.link, '_blank')}
          >
            <img
              className="w-full h-56 object-cover"
              src={product.image}
              alt={`${product.title} Captura`}
            />
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
