import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        <div className="img-container">
          <img src={src} alt="kus nábytku" />
        </div>
        <div className="product-description">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};
