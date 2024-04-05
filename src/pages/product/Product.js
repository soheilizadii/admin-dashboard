import Single from "../../components/single/Single";
import { singleProduct } from "../../config/data";
import styles from "./product.module.scss";
const Product = () => {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
