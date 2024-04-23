import { useEffect } from 'react';
import { useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import './HomePage.css';

export const HomePage = () => {
  const [productInfo, setProductInfo] = useState(['test']);
  //console.log('useState', productInfo);

  //useEffect pro API produktů - posílám do child - products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/react-2/xxxmuck/products',
      );
      const data = await response.json();
      //console.log(data);
      setProductInfo(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="intro">
        <h1 className="intro__headline">Aktuální nabídka</h1>
        <div className="intro__description">
          <p>Nejnovější prémiové produkty od předních českých designérů.</p>
          <p>Doprava zdrama až k Vám domů. Na cenu nehleďte.</p>
        </div>
      </section>
      <section className="productlist">
        {productInfo.map(({ image, name, id }) => (
          <ProductItem src={image} name={name} key={id} />
        ))}
      </section>
    </>
  );
};
