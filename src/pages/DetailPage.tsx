import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import ProductType from "../Type";

import { ProductDetail } from "../components";

const DetailPage = () => {
  const { products, addCart, subCart } = useContext(ProductContext);

  const { id } = useParams();
  return (
    <div>
      {products?.map((product: ProductType) => {
        if (product.id === Number(id))
          return (
            <ProductDetail
              key={product.id}
              product={product}
              addCart={addCart}
              subCart={subCart}
            />
          );
      })}
    </div>
  );
};

export default DetailPage;
