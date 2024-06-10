import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    <>
      <img src={productInfo.image} alt="kus nábytku" />
      <h2>{productInfo.name}</h2>
      <button>Objednat</button>
    </>
  );
};
