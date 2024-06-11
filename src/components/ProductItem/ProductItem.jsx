import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductItem.css';

export const ProductItem = ({ src, name, id }) => {
  //--React prop types
  ProductItem.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  };

  return (
    <div className="product-container">
      <Link to={`product/${id}`}>
        <div className="img-container__home">
          <img className="img__home" src={src} alt="kus nábytku" />
        </div>
        <p className="product-description">{name}</p>
      </Link>
    </div>
  );
};
