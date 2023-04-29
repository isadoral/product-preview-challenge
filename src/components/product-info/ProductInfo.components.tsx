import Button from "../Button.components";
import "./ProductInfo.style.css";

const ProductInfo = () => {
  return (
    <div className="product-info-banner">
      <h3>P E R F U M E</h3>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voloptuous interpretation composed by Olivier Plge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price">
        <h2>$149.99</h2>
        <h4>$169.99</h4>
      </div>

      <div className="button">
        <Button />
      </div>
    </div>
  );
};

export default ProductInfo;
