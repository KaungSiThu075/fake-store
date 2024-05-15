import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { TbSquareRoundedMinusFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

interface ProductInterface {
  product: Product;
  addCart: (product: Product) => void;
  subCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductInterface> = ({
  product,
  addCart,
  subCart,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 py-5">
        <div>
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
        </div>
      </div>

      <div className="flex flex-col items-start px-3 py-5 gap-y-5">
        <p className="text-gray-500 uppercase ">{product.category}</p>
        <p className="font-semibold">{product.title}</p>
        <p className="font-semibold ">${product.price}</p>
        <p>{product.description}</p>
        <Link
          className="px-2 py-1 bg-gray-500 rounded-md hover:text-white"
          to={`/`}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
