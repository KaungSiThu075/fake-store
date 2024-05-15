import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import SidebarProduct from "./SidebarProduct";
import { RxCross1 } from "react-icons/rx";
import ProductType from "../Type";

const Sidebar = () => {
  const { cart, isShowSidebar, setCart, setIsShowSidebar } =
    useContext(ProductContext);
  return (
    <div>
      {isShowSidebar && (
        <div className="absolute z-20 w-full p-5 overflow-y-auto bg-white h-lvh">
          <div className="flex items-center justify-between pb-5">
            <button
              className="px-2 py-1 bg-gray-500 rounded-md hover:text-white"
              onClick={() => setCart([])}
            >
              remove all
            </button>
            <RxCross1
              className="text-xl"
              onClick={() => setIsShowSidebar(!isShowSidebar)}
            />
          </div>

          {cart?.map((product: ProductType) => {
            return <SidebarProduct key={product.id} product={product} />;
          })}
          <p className="py-5 font-semibold">
            Total Cost : $
            {cart
              .reduce(
                (a: number, b: ProductType) => a + b.quantity * b.price,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
