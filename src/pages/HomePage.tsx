import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import ProductType from "../Type";
import { Product, Loading } from "../components";
import { CategoryContext } from "../context/categoriesContext";

const HomePage = () => {
  const { products, filteredProducts, filterWord, isLoading, isError } =
    useContext(ProductContext);
  const { filterCategoryProducts, category } = useContext(CategoryContext);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <div className="grid-cols-1 p-3 gird sm:gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filterWord &&
        filteredProducts?.map((product: ProductType) => {
          return <Product key={product.id} product={product} />;
        })}

      {!filterWord &&
        filterCategoryProducts?.map((product: ProductType) => {
          return <Product key={product.id} product={product} />;
        })}

      {!filterWord &&
        category === "all" &&
        products?.map((product: ProductType) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
};

export default HomePage;
