import ProductInfo from "../product-info/ProductInfo.components";
import productImage from "../../assets/images/image-product-desktop.jpg";
import productMobileImage from "../../assets/images/image-product-mobile.jpg";
import "./ProductPreview.style.css";

const ProductPreview = () => {
  return (
    <div className="product-preview">
      <picture className="perfume-image" key={productMobileImage}>
        <source
          className="perfume-image"
          media="(max-width: 600px)"
          src={productMobileImage}
        />

        <img
          className="perfume-image"
          src={productImage}
          sizes="(max-width: 600px) , (max-width: 600px) "
          alt="perfume image"
        />
      </picture>

      <ProductInfo />
    </div>
  );
};

export default ProductPreview;
