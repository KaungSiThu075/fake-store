import React, { ReactNode, useState } from "react";
import { useFetchCategories, useFetchProducts } from "../hooks";
import ProductType from "../Type";

type CategoryContextType = any;

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryContext = React.createContext<
  CategoryContextType | undefined
>(undefined);

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const { data: categories } = useFetchCategories();
  const { data: products } = useFetchProducts();

  const [category, setCategory] = useState("all");

  const showCategory = (Category: string) => {
    setCategory(Category);
  };

  const filterCategoryProducts = products?.filter(
    (product: ProductType) => product.category === category
  );

  return (
    <CategoryContext.Provider
      value={{
        categories,
        showCategory,
        category,
        filterCategoryProducts,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
