import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { GrShop } from "react-icons/gr";
import ProductType from "../Type";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { FaShopify } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Nav = () => {
  const navigate = useNavigate();
  const { filterWord, setFilterWord, cart, isShowSidebar, setIsShowSidebar } =
    useContext(ProductContext);

  return (
    <div className="sticky top-0">
      <Sidebar />
      <div className="flex items-center justify-between w-full px-5 bg-gray-300 ">
        <div className="flex items-center justify-between gap-5 py-5 ">
          <FaShopify
            className="text-3xl text-blue-600"
            onClick={() => navigate(`/`)}
          />
          <input
            placeholder="search"
            className="p-1 border-2 border-gray-500 rounded-md outline-none md:w-64"
            type="text"
            value={filterWord}
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between ">
          <p className="hidden sm:block sm:w-44">
            You added{" "}
            {cart.reduce((a: number, b: ProductType) => a + b.quantity, 0)}{" "}
            products
          </p>
          <div
            onClick={() => setIsShowSidebar(!isShowSidebar)}
            className="relative flex items-center"
          >
            <GrShop className="text-2xl " />

            <p className="absolute text-[9px] left-2 top-2 font-semibold">
              {cart.reduce((a: number, b: ProductType) => a + b.quantity, 0)}
            </p>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Nav;
