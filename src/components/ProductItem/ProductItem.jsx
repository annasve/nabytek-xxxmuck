export const ProductItem = ({ src, name }) => {
  return (
    <>
      <div className="product-container">
        <a href="#">
          <div className="img-container">
            <img src={src} alt="kus nábytku" />
          </div>
          <div className="product-description">
            <p>{name}</p>
          </div>
        </a>
      </div>
    </>
  );
};
