import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductPage.css';

export const ProductPage = () => {
  const { productId } = useParams();

  const [productInfo, setProductInfo] = useState({});

  //--useEffect pro API s URL parametrem dle id
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`,
      );
      const data = await response.json();
      setProductInfo(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="product-card">
      <div className="product-card__image-container">
        <img
          className="product-card__image"
          src={productInfo.image}
          alt="kus nábytku"
        />
      </div>
      <div>
        <h2 className="product-card__name">{productInfo.name}</h2>
        <button className="card__button">Objednat</button>
      </div>
    </section>
  );
};
