import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { TbSquareRoundedMinusFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { ProductContext } from "../context/productContext";

type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
  quantity: number;
};

interface ProductInterface {
  product: Product;
}

const Product: React.FC<ProductInterface> = ({ product }) => {
  const { addCart, subCart } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="py-6 ">
      <div className="flex items-center justify-center gap-10">
        <div className="pb-5">
          <img className="w-32 h-32 " src={product.image} alt="" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <TbSquareRoundedPlusFilled
            className="text-2xl text-blue-500"
            onClick={() => addCart(product)}
          />
          <TbSquareRoundedMinusFilled
            className="text-2xl text-red-500"
            onClick={() => subCart(product)}
          />
          <FaEye
            className="text-xl text-green-500"
            onClick={() => navigate(`/product/${product.id}`)}
          />
        </div>
      </div>
      <div>
        <p className="text-gray-600 uppercase ">{product.category}</p>
        <p className="font-semibold">{product.title}</p>
        <p className="font-semibold ">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
