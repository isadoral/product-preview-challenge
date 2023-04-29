import ProductInfo from "../product-info/ProductInfo.components";
import "./ProductPreview.style.css";

const ProductPreview = () => {
  return (
    <div className="product-preview">
      <img
        src="././public/images/image-product-desktop.jpg"
        alt="perfume image"
        className="perfume-image"
      />
      <ProductInfo />
    </div>
  );
};

export default ProductPreview;
