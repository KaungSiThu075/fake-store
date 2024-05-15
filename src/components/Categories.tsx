import { useContext } from "react";
import { CategoryContext } from "../context/categoriesContext";

const Categories = () => {
  const { categories, showCategory } = useContext(CategoryContext);
  return (
    <div className="flex items-center justify-center px-5 py-2 text-xs text-white bg-blue-300 gap-x-3 hover:cursor-pointer sm:text-lg">
      <p onClick={() => showCategory("all")}>all</p>
      {categories?.map((category: string, index: number) => {
        return (
          <div key={index}>
            <p onClick={() => showCategory(category)}>{category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
