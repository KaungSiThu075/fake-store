import { useContext } from "react";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { TbSquareRoundedMinusFilled } from "react-icons/tb";
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

const SidebarProduct: React.FC<ProductInterface> = ({ product }) => {
  const { addCart, subCart, filterSidebar } = useContext(ProductContext);
  return (
    <div className="py-3 border-y-2">
      <div className="flex items-center justify-around">
        <div>
          <div>
            <img className="w-20 h-20" src={product.image} alt="" />
          </div>
          <p>Price : ${product.price}</p>
          <button
            className="px-2 py-1 bg-gray-500 rounded-md hover:text-white"
            onClick={() => filterSidebar(product)}
          >
            remove
          </button>
        </div>
        <div>
          <div className="flex items-center justify-center ">
            <TbSquareRoundedMinusFilled
              className="text-xl text-red-500"
              onClick={() => subCart(product)}
            />
            <p className="text-center w-7">{product.quantity}</p>
            <TbSquareRoundedPlusFilled
              className="text-xl text-blue-500"
              onClick={() => addCart(product)}
            />
          </div>
          <p className="w-10">
            Total ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
