import { useEffect } from 'react';
import { useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import './HomePage.css';

export const HomePage = () => {
  const [productInfo, setProductInfo] = useState([]);

  //useEffect pro API produktů (useEffect protože se jedná jen o tréninkový projekt)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/react-2/xxxmuck/products',
      );
      const data = await response.json();
      setProductInfo(data);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <section className="intro">
        <h2 className="intro__headline">Aktuální nabídka</h2>
        <div className="intro__description">
          <p>Nejnovější prémiové produkty od předních českých designérů.</p>
          <p>Doprava zdarma až k Vám domů. Na cenu nehleďte.</p>
        </div>
      </section>
      <section className="productlist">
        {productInfo.map(({ image, name, id }) => (
          <ProductItem src={image} name={name} key={id} id={id} />
        ))}
      </section>
    </main>
  );
};
